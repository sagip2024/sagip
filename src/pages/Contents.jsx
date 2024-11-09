import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import Icon10 from '../assets/icons/10.png';
import Icon7 from '../assets/icons/7.png';
import Icon9 from '../assets/icons/9.png';
import Icon8 from '../assets/icons/8.png';
import Macronutrients from './Macronutrients';
import Micronutrients from './Micronutrients';
import FoodSafety from './FoodSafety';
import FoodSupplement from './FoodSupplement';
import Downloadables from './Downloadables';
import NutriRecomm from './NutriRecomm';
import { useFirebaseStorage } from '../context/firebaseStorage';
function Contents() {
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
  return (
    <div className="relative">
        <img 
        src={icons[7]} 
        alt="" 
        className="fixed top-0 left-0 z-0 mt-[10%] w-80 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
        <img 
        src={icons[9]} 
        alt="" 
        className="fixed top-0 right-10 z-0 w-80 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden borde-black" 
        />
        <img 
        src={icons[8]} 
        alt="" 
        className="fixed bottom-0 z-0 w-80 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
        <img 
        src={icons[1]} 
        alt="" 
        className="fixed bottom-20 z-0 right-10 w-80 drop-shadow-2xl animate-mini-bounce sm:hidden md:hidden" 
        />
      <div className="relative z-10 bg-white bg-opacity-0">
        <Macronutrients />
        <Micronutrients />
        <NutriRecomm />
        <FoodSupplement />
        <FoodSafety />
        <Downloadables />
      </div>
    </div>
  );
}

export default Contents;
