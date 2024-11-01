import React, { useState } from 'react';
import Logo from '../assets/SagipLogo.png';
import Home from '../assets/homeIcon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function NavLinks() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate()
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div>
      <div className="py-1 z-10 bg-[#DE638A] sm:hidden md:hidden">
        <div className="flex justify-between items-center px-10">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Sagip Logo" className="rounded-full h-12" />
            <div className="bg-pink-300 grid place-items-center px-5 py-3 rounded-full font-bold italic font-sans">
              <span>S.A.G.I.P</span>
            </div>
          </div>
          <div className="flex space-x-4">
              <div
                className="font-sans font-bold py-2 px-4 border border-[#DE638A] bg-pink-300 hover:bg-pink-500 text-xl rounded-3xl italic z-50 cursor-pointer" onClick={() => navigate('/about')}
              >
                About Us
              </div>
            <div className="bg-pink-300 rounded-3xl h-11 w-24 flex items-center justify-center cursor-pointer hover:bg-pink-500 z-50" onClick={() => navigate('/')}>
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
        } sm:block md:block lg:hidden`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>

        <div className="p-6">
          <div className="grid place-items-center gap-3 mb-4">
            <img src={Logo} alt="Sagip Logo" className="rounded-full h-36" />
            <div className="grid place-items-center px-5 py-3 rounded-full font-bold italic font-sans">
              <span className="text-2xl -mt-10">S.A.G.I.P</span>
            </div>
          </div>
          <div className="bg-pink-300 rounded-3xl h-11 flex items-center justify-center cursor-pointer hover:bg-pink-500 w-full font-bold text-xl italic mb-5"
           onClick={() => navigate('/')}
          >
            Home
          </div>
            <button
              className="block w-full font-sans font-bold py-2 px-4 mb-4 border border-[#DE638A] bg-pink-300 hover:bg-pink-500 text-xl rounded-3xl italic cursor-pointer" onClick={() => navigate('/about')}
            >
              About Us
            </button>
        </div>
      </div>
    </div>
  );
}

export default NavLinks;
