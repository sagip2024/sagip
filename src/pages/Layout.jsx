import React from 'react';
import Icon7 from '../assets/icons/7.png';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <img 
        src={Icon7} 
        alt="" 
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none z-0" 
      />
      <div className="relative z-10 bg-white bg-opacity-80">
        {children}
      </div>
    </div>
  );
};

export default Layout;
