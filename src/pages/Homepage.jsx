import React from 'react';
import Slider from '../components/Slider';
import DOH1 from '../assets/doh1.jpg';
import DOH2 from '../assets/doh2.jpg';
import DOH3 from '../assets/doh3.jpg';
import Icons from '../components/Icons';
import Content from '../components/Content';
import Icon1 from '../assets/icons/1.png';
import Icon2 from '../assets/icons/2.png';
import Icon3 from '../assets/icons/3.png';
import Icon4 from '../assets/icons/4.png';
import Icon5 from '../assets/icons/5.png';
import Icon6 from '../assets/icons/6.png';
import Contents from './Contents';

function Homepage() {
  const arrayImg = [
    { img: DOH1, title: 'Title1' },
    { img: DOH2, title: 'Title2' },
    { img: DOH3, title: 'Title3' },
  ];

  return (
    <>
      <div id="/" className="z-20 relative grid sm:place-items-center md:place-items-center mb-24 bg-red-100">
        <div className='flex justify-center items-center sm:w-[80%] md:w-[80%]'>
          <Slider 
            images={arrayImg}
          />
        </div>
        <div className="text-center my-4">
          <span>Description: </span>
        </div>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-2 gap-x-24 gap-y-10 justify-center items-center mx-auto">
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
