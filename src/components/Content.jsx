import React, { useState, useEffect } from 'react';
import Icon from '../assets/icons/1.png';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../../firebaseConfig';
import { CircularProgressbar } from 'react-circular-progressbar';
import axios from 'axios';
import 'react-circular-progressbar/dist/styles.css';
function Macronutrients({
  title,
  description1,
  description2,
  desc1,
  desc2,
  id,
  pdfName,
  link,
  filePath,
  showVideo,
  toggle2,
  toggle1,
  videoIndex
}) {
  const [toggle, setToggle] = useState(false);
  const [downloadables, setDownloadables] = useState(false);
  const [videos, setVideos] = useState([]);
  const [downloadProgress, setDownloadProgress] = useState({});
  const [isDownloading, setIsDownloading] = useState(false);

  const storage = getStorage(firebaseApp);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const toggleDownloadablesHandler = () => {
    setDownloadables(!downloadables);
  };

  const handleDownload = (filePath, pdfName) => {
    const link = document.createElement('a');
    link.href = filePath; 
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download initiated for PDF: ${pdfName}`);
  };

  const handleDownloadVideo = async (video) => {
    try {
      console.log(`Starting download for video: ${video.name}`);
      const downloadUrl = await getDownloadURL(ref(storage, `videos/${video.name}`));
      console.log(`Download URL retrieved: ${downloadUrl}`);
      const response = await axios.get(downloadUrl, {
        responseType: 'blob',
        onDownloadProgress: (progressEvent) => {
          if (progressEvent.lengthComputable) {
            const percentComplete = (progressEvent.loaded / progressEvent.total) * 100;
            setDownloadProgress((prev) => ({ ...prev, [video.name]: percentComplete }));
          }
        }
      });

      const blob = new Blob([response.data], { type: 'video/mp4' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = video.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadProgress((prev) => ({ ...prev, [video.name]: 0 }));
      console.log(`Download completed for video: ${video.name}`);
    } catch (error) {
      console.error('Error downloading video:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleView = (link) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRef = ref(storage, 'videos');
        const videoList = await listAll(videosRef);
        const videoData = await Promise.all(
          videoList.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            const name = itemRef.name;
            return { url, name };
          })
        );
        setVideos(videoData);
        console.log(videoData);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [storage]);

  return (
    <div id={id} className="mt-10 h-[100vh]">
      <div>
        
      <div className="border-2 border-[#473664] w-[50%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
      <span
        className="font-bobby text-[3rem] font-bold text-[#DE638A] tracking-wide"
        style={{
          textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
          color: "#DE638A"
        }}
      >
        {title}
      </span>
    </div>

        <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          {desc1 && (
            <div className='w-[50%] border-2 border-black py-3 px-4 rounded-lg bg-white'>
              {description1}
            </div>
          )}

          {showVideo && videos.length > 0 && (
            <div className="w-[50%] sm:w-[80%] md:w-full h-72 overflow-hidden rounded-2xl bg-black relative">
              <video controls className="w-full h-full" src={videos[videoIndex].url}></video>
            </div>
          )}

          {desc2 && (
            <div className='w-[50%] border-2 border-black py-3 px-4 rounded-lg bg-white'>
              {description2}
            </div>
          )}

          {toggle1 && (
            <div className="grid w-full place-items-center">
              <div 
                onClick={toggleHandler}
                className="grid place-items-center gap-10 mt-5 bg-[#FFF1B4] w-[50%] rounded-full py-2 cursor-pointer relative"
              >
                <img src={Icon} alt="PDF Icon" className='absolute w-24 left-6 mt-5' />
                <span className="font-bold font-bobby text-[#473664]">PDF VIEW/DOWNLOAD OF {title} HERE</span>
              </div>

              {toggle && (
                <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[50%] relative z-10">
                  <ul className="divide-y">
                    <li 
                      className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                      onClick={() => handleDownload(filePath, pdfName)} 
                    >
                      Download PDF
                    </li>
                    <li 
                      className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer" 
                      onClick={() => handleView(link)}
                    >
                      View PDF
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {toggle2 && (
            <div className="grid w-full place-items-center">
              <div 
                onClick={toggleDownloadablesHandler}
                className="grid place-items-center gap-10 mt-5 bg-[#FFF1B4] w-[50%] rounded-full py-2 cursor-pointer relative"
              >
                <img src={Icon} alt="Icon" className='absolute w-24 left-6 mt-5' />
                <span className="font-bold">DOWNLOADABLES FOR {title} HERE</span>
              </div>

              {downloadables && (
                <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[50%] relative z-10">
                  <ul className="divide-y">
                    {videos.map((video, index) => (
                      <li key={index} className="flex items-center justify-between py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer">
                        <span onClick={() => handleDownloadVideo(video)} className="flex-1">{video.name}</span>
                        {downloadProgress[video.name] !== undefined && (
                          <div className="w-12 h-12 ml-4">
                            <CircularProgressbar
                              value={downloadProgress[video.name]}
                              text={`${Math.round(downloadProgress[video.name])}%`}
                              styles={{
                                path: { stroke: `rgba(62, 152, 199, ${downloadProgress[video.name] / 100})` },
                                text: { fill: '#f88', fontSize: '16px' },
                              }}
                            />
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Macronutrients;
