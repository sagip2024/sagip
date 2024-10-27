import React from 'react';
import Lines from '../assets/lines.png'
function Icons({ bgColor, icon, name, borderColor,hoverBg, pageId, image }) {
  return (
    <>
      <a href={`#${pageId}`}>
        <div className={`border ${borderColor} ${bgColor} w-40 h-40 sm:w-32 sm:h-32 grid  place-items-center rounded-[30%] cursor-pointer relative ${hoverBg} overflow-hidden`}>
          <img src={Lines} alt="Sagip Icon Background Lines" />
          <img src={image} alt="Sagip Icons" className='w-32 absolute sm:w-24'/>
          <p className="absolute bottom-3 sm:bottom-1 font-bold p-2 text-center sm:text-sm">{name}</p>
        </div>
      </a>
    </>
  );
}

export default Icons;
