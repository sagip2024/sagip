import React from 'react';
import BG from '../assets/about/BG.png';
import Logo from '../assets/icons/SAGIPTransparent.png'
function Loading() {
  return (
    <div
      className="h-full w-full bg-white z-50 bg-cover bg-center grid place-items-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <img src={Logo} alt="Sagip Logo" className='h-96 w-96 animate-pulse'/>
    </div>
  );
}

export default Loading;
