import React, { useState, useEffect } from 'react';
import Icon from '../assets/icons/1.png';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../../firebaseConfig'; // Ensure this path is correct

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
  fileName,
  showVideo,
  toggle2,
  toggle1,
  videoIndex
}) {
  const [toggle, setToggle] = useState(false);
  const [downloadables, setDownloadables] = useState(false);
  const [videos, setVideos] = useState([]); // Store both URLs and filenames

  const storage = getStorage(firebaseApp);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const toggleDownloadablesHandler = () => {
    setDownloadables(!downloadables);
  };

  const handleDownload = (filePath) => {
    const linkElement = document.createElement('a');
    linkElement.href = filePath;
    linkElement.setAttribute('download', ''); // Specify filename if needed
    document.body.appendChild(linkElement);
    linkElement.click();
    document.body.removeChild(linkElement);
  };

  const handleDownloadVideo = async (video) => {
    const linkElement = document.createElement('a');
    linkElement.href = video.url; // Use the video URL
    linkElement.setAttribute('download', video.name); // Set the filename for the download
    document.body.appendChild(linkElement);
    linkElement.click(); // Trigger the download
    document.body.removeChild(linkElement);
  };

  const handleView = (link) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videosRef = ref(storage, 'videos'); // Adjust to your storage path
        const videoList = await listAll(videosRef);
        const videoData = await Promise.all(
          videoList.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef); // Get the download URL
            const name = itemRef.name; // Get the original filename
            return { url, name }; // Return an object with both URL and name
          })
        );
        setVideos(videoData); // Set the state with video data
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [storage]);

  return (
    <div id={id} className="mt-10 h-[100vh]">
      <div>
        <div className="border-2 border-[#473664] w-[50%] rounded-e-3xl bg-pink-300 flex justify-center py-5">
          <span className="text-4xl font-bold">{title}</span>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 gap-y-5">
          {desc1 && (
            <div className='w-[50%] border-2 border-black py-3 px-4 rounded-lg bg-white'>
              {description1}
            </div>
          )}

          {showVideo && videos.length > 0 && (
            <div className="w-[50%] sm:w-[80%] md:w-full h-72 overflow-hidden rounded-2xl bg-black relative">
              <video controls className="w-full h-full" src={videos[videoIndex].url}></video> {/* Display first video as default */}
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
                <span className="font-bold">PDF VIEW/DOWNLOAD OF {title} HERE</span>
              </div>

              {toggle && (
                <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[50%] relative z-10">
                  <ul className="divide-y">
                    <li 
                      className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                      onClick={() => handleDownload(filePath)} 
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
                      <li 
                        key={index}
                        className="py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                        onClick={() => handleDownloadVideo(video)} // Use the video object for download
                      >
                        Download Video {index + 1}
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
