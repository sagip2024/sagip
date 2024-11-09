import React, { useEffect, useState } from 'react';
import Home from '../assets/homeIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/icons/SagipLogo.png';
import Logo1 from '../assets/SagipLogo.png';
import { useFirebaseStorage } from '../context/firebaseStorage';
function NavLinks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const navigator = (nav) => {
    navigate(nav)
    setIsDrawerOpen(!isDrawerOpen)
  }
  const [icons, setIcons] = useState([])
  const { listFilesInFolder } = useFirebaseStorage();
  useEffect(() => {
    const fetchIcons = async () => {
      const paths = await listFilesInFolder('images/icons');
      const fullPaths = paths.map(
        path => `https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/${encodeURIComponent(path)}?alt=media`
      );
      setIcons(fullPaths);
    };
    fetchIcons();
  }, [listFilesInFolder]);
  console.log(icons)
  return (
    <div>
      <div className="py-1 z-10 bg-[#DE638A] sm:hidden md:hidden">
        <div className="flex justify-between items-center px-10">
          <div className="flex items-center gap-3">
            <img src={Logo1} alt="Sagip Logo" className="rounded-full h-12" />
            <div className="bg-pink-300 grid place-items-center px-5 py-3 rounded-full font-bold italic">
              <span className='font-sans font-bold'>S.A.G.I.P</span>
            </div>
          </div>
          <div className="flex space-x-4">
              <div
                className="font-sans font-bold py-2 px-4 border border-[#DE638A] bg-pink-300 hover:bg-pink-500 text-xl rounded-3xl z-20 italic cursor-pointer" onClick={() => navigate('/about')}
              >
                About Us
              </div>
            <div className="bg-pink-300 rounded-3xl h-11 w-24 flex items-center justify-center cursor-pointer hover:bg-pink-500 z-20" onClick={() => navigate('/')}>
              <img src={Home} alt="Home Icon" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block md:block">
        <button
          className="bg-pink-300 p-3 rounded-full font-bold mt-5 ml-5 w-14 h-14"
          onClick={toggleDrawer}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform z-50 ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:block md:block hidden`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>

        <div className="p-6">
          <div className="grid place-items-center gap-3">
            <img src={Logo} alt="Sagip Logo" className="rounded-full h-36" />
            <div className="-mt-9 font-bold italic font-sans w-full text-center">
              <span className="text-[#DE638A] font-semibold text-xs text-justify">
                Support and Guidance: An Innovative Tool for PrimiMothers' Nutrition
              </span>
            </div>
          </div>
          <div
            className="bg-pink-300 font-sans rounded-3xl h-11 flex items-center justify-center cursor-pointer hover:bg-pink-500 w-full font-bold text-xl italic mb-5 mt-10"
            onClick={() => navigator('/')}
          >
            Home
          </div>
          <button
            className="font-sans block w-full font-bold py-2 px-4 mb-4 border border-[#DE638A] bg-pink-300 hover:bg-pink-500 text-xl rounded-3xl italic cursor-pointer"
            onClick={() => navigator('/about')}
          >
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
