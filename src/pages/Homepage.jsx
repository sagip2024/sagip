import React, { useEffect, useState } from 'react';
import Icons from '../components/Icons';
import Contents from './Contents';
import NavLinks from '../components/NavLinks';
import BG from '../assets/about/BG.png'
import firebaseApp from '../../firebaseConfig';
import { useFirebaseStorage } from '../context/firebaseStorage';
import Slider from '../components/Slider'
function Homepage() {
  const [sliders, setSliders] = useState([]);
  const { listFilesInFolder } = useFirebaseStorage();
  const [icon, setIcon] = useState([]);
  useEffect(() => {
    const fetchIcons = async () => {
      const paths = await listFilesInFolder('images/icons');
      const fullPaths = paths.map(
        path => `https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/${encodeURIComponent(path)}?alt=media`
      );
      setIcon(fullPaths);
    };
    fetchIcons();
  }, [listFilesInFolder]);

  useEffect(() => {
    const fetchSliders = async () => {
      const paths = await listFilesInFolder('images/slider');
      const fullPaths = paths.map(
        path => `https://firebasestorage.googleapis.com/v0/b/sagip-a7258.appspot.com/o/${encodeURIComponent(path)}?alt=media`
      );
      setSliders(fullPaths);
    };
    fetchSliders();
  }, [listFilesInFolder]);
  const slides = [
    {images: [sliders[0], sliders[4], sliders[5], sliders[6]]},
    {images: [sliders[7], sliders[8], sliders[9], sliders[10]]},
    {images: [sliders[1], sliders[2], sliders[3], sliders[11]]}
  ]
  return (
    <>
      <div
        id="/"
        className="z-20 relative grid sm:place-items-center md:place-items-center mb-24 py-5 sm:py-10 md:py-10"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='flex justify-center items-center sm:w-[80%] md:w-[80%]'>
          <Slider 
            slides={slides}
          />
        </div>
        <div className="mt-5 grid grid-cols-3 sm:grid-cols-2 gap-x-24 sm:gap-x-12 gap-y-10 justify-center items-center mx-auto">
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Macro"
            pageId="macro"
            image={icon[5]}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Micro"
            pageId="micro"
            image={icon[4]}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Nutri Recomm"
            pageId="nutrirecomm"
            image={icon[2]}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Supplement"
            pageId="foodsupplement"
            image={icon[6]}
          />
          <Icons 
            bgColor="bg-[#F6A2BB]"
            borderColor="border-[#DE638A]"
            name="Food Safety" 
            pageId="foodsafety"
            image={icon[3]}
          />
          <Icons 
            bgColor="bg-[#F3D9E5]"
            borderColor="border-[#F3D9E5]"
            name="Download Video"
            pageId="downloadables"
            image={icon[0]}
          />
        </div>
      </div>
      <Contents />
    </>
  );
}

export default Homepage;
