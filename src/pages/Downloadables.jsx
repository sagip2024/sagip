import React, { useState, useEffect } from 'react';
import Icon from '../assets/icons/1.png';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import firebaseApp from '../../firebaseConfig';

function Downloadables() {
    const [toggle, setToggle] = useState(false);
  const [downloadables, setDownloadables] = useState(false);
  const [videos, setVideos] = useState([]);

  const storage = getStorage(firebaseApp);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const toggleDownloadablesHandler = () => {
    setDownloadables(!downloadables);
  };

  const handleDownload = (filePath, fileName) => {
    const link = document.createElement('a');
    link.href = filePath; 
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(`Download initiated for PDF: ${fileName}`);
  };

  const handleRedirectVideo = (videoUrl) => {
    window.open(videoUrl, '_blank');
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
    <div id="downloadables" className="mt-10 py-10">
        <div className="border-2 border-[#473664] w-[50%] sm:w-[80%] rounded-e-3xl bg-pink-300 flex justify-center py-1">
        <span
            className="font-bobby text-[3rem] sm:text-4xl font-bold text-[#DE638A] tracking-wide"
            style={{
            textShadow: "2px 2px 0 #473664, -2px 2px 0 #473664, 2px -2px 0 #473664, -2px -2px 0 #473664",
            color: "#DE638A"
            }}
        >
            DOWNLOADABLES
        </span>
        </div>
        <div className="grid w-full place-items-center mt-5">
            <div 
              className="grid place-items-center gap-10 mt-5 bg-[#FFF1B4] w-[60%] rounded-full py-2 cursor-pointer relative sm:w-[80%]"
            >
              <img src={Icon} alt="Icon" className='absolute w-24 left-6 mt-5 sm:hidden' />
              <span 
              className="font-bold font-bobby text-[#473664] block text-center"
              onClick={() => handleDownload("/files/pdf/SAGIP_Maternal_Nutrition_Modules.pdf", "MATERNAL_NUTRITION_MODULES")} 
              >IDOWNLOAD ANG KABUUANG MODULE</span>
            </div>
        </div>
        <div className="grid w-full place-items-center mt-10">
            <div 
              onClick={toggleDownloadablesHandler}
              className="grid place-items-center gap-10 mt-5 bg-[#FFF1B4] w-[60%] rounded-full py-2 cursor-pointer relative sm:w-[80%]"
            >
              <img src={Icon} alt="Icon" className='absolute w-24 left-6 mt-5 sm:hidden' />
              <span className="font-bold font-bobby text-[#473664] block text-center ">DOWNLOADABLES VIDEOS HERE</span>
            </div>

            {downloadables && (
              <div className="dropdown-content bg-white shadow-md rounded mt-2 w-[60%] relative z-10">
                <ul className="divide-y">
                  <li 
                    className="flex items-center justify-between py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleView("https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/videos%2FMACRONUTRIENTS.mp4?alt=media&token=a43bb219-19ba-468f-94b4-b39f91d1c469")}
                  >
                    <span className="flex-1 sm:text-xs">MACRONUTRIENTS</span>
                  </li>
                  <li 
                    className="flex items-center justify-between py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleView("https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/videos%2FMICRONUTRIENTS.mp4?alt=media&token=ca10b413-03d0-463a-9aca-4959de4e4e57")}
                  >
                    <span className="flex-1 sm:text-xs">MICRONUTRIENTS</span>
                  </li>
                  <li 
                    className="flex items-center justify-between py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleView("https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/videos%2FNT.mp4?alt=media&token=e73e3194-bca2-4f23-a500-ad9d4ec42e0e")}
                  >
                    <span className="flex-1 sm:text-xs">NUTRITION RECOMMENDATION</span>
                  </li>
                  <li 
                    className="flex items-center justify-between py-2 px-4 hover:bg-[#FFF1B4] cursor-pointer"
                    onClick={() => handleView("https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/videos%2FFS.mp4?alt=media&token=64feade7-bf8a-442c-ba49-9b1a5050975e")}
                  >
                    <span className="flex-1 sm:text-xs">FOOD SUPPLEMENT</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
  )
}

export default Downloadables