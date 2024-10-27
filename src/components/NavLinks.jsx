import React from 'react';
import Logo from '../assets/SagipLogo.png';
import Home from '../assets/homeIcon.png'
function NavLinks({ pageId }) {
  return (
    <div className="py-1 z-10 sm:hidden bg-[#DE638A]">
      <div className="flex justify-between items-center px-10">
        <div className='flex items-center gap-3'>
          <img src={Logo} alt="Sagip Logo" className='rounded-full h-12'/>
          <div className='bg-pink-300 grid place-items-center px-5 py-3 rounded-full font-bold'>
            <span>S.A.G.I.P</span>
          </div>
        </div>
        <div className='flex space-x-4'>
          <a href={`${pageId}`}>
            <button className="font-bold py-2 px-4 border border-[#DE638A] bg-pink-300 hover:bg-gray-300 text-xl rounded-3xl">
              About Us
            </button>
          </a>
          <div className='bg-pink-300 rounded-3xl h-11 w-24 flex items-center justify-center cursor-pointer hover:bg-pink-500'>
            <img src={Home} alt="Home Icon" className="w-full h-full object-contain"/>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default NavLinks;
