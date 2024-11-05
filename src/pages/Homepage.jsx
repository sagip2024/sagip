import React from 'react';
import Slider from '../components/Slider';
import Slide1 from '../assets/Home/1.png'
import Slide2 from '../assets/Home/2.png'
import Slide3 from '../assets/Home/3.jpg'
import Slide4 from '../assets/Home/4.png'
import Slide5 from '../assets/Home/5.png'
import Slide6 from '../assets/Home/6.png'
import Slide7 from '../assets/Home/7.png'
import Slide8 from '../assets/Home/8.png'
import Slide9 from '../assets/Home/9.png'
import Slide10 from '../assets/Home/10.png'
import Slide11 from '../assets/Home/11.png'
import Slide12 from '../assets/Home/12.png'
import Icons from '../components/Icons';
import Content from '../components/Content';
import Icon1 from '../assets/icons/1.png';
import Icon2 from '../assets/icons/2.png';
import Icon3 from '../assets/icons/3.png';
import Icon4 from '../assets/icons/4.png';
import Icon5 from '../assets/icons/5.png';
import Icon6 from '../assets/icons/6.png';
import Contents from './Contents';
import NavLinks from '../components/NavLinks';
import BG from '../assets/about/BG.png'

function Homepage() {
  const slides = [
    { images: [Slide1, Slide2, Slide3, Slide4]},
    { images: [Slide5, Slide6, Slide7, Slide8]},
    { images: [Slide9, Slide10, Slide11, Slide12]},
  ];

  return (
    <>
      <div id="/" className="z-20 relative grid sm:place-items-center md:place-items-center mb-24 py-20 sm:py-10 md:py-10"
      style={{ backgroundImage: `url(${BG})` }}
      >
        <div className='flex justify-center items-center sm:w-[80%] md:w-[80%]'>
          <Slider 
            slides={slides}
          />
        </div>
        <div className="text-center my-4">
          <span>Description: </span>
        </div>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-2 gap-x-24 sm:gap-x-12 gap-y-10 justify-center items-center mx-auto">
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Macro"
            pageId="macro"
            image={Icon5}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Micro"
            pageId="micro"
            image={Icon4}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Nutri Recomm"
            pageId="nutrirecomm"
            image={Icon2}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Supplement"
            pageId="foodsupplement"
            image={Icon6}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Safety" 
            pageId="foodsafety"
            image={Icon3}
          />
          <Icons 
            bgColor="bg-[#F3D9E5]"
            borderColor="border-[#F3D9E5]"
            name="Download Video"
            pageId="downloadables"
            image={Icon1}
          />
        </div>
      </div>
      <Contents />
    </>
  );
}

export default Homepage;
