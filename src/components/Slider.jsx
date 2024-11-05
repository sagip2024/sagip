import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import BG from '../assets/SLIDER_BACKGROUND.png';
import Logo from '../assets/icons/SagipLogo.png';

function Slider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 4000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
    resetAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    resetAutoSlide();
  };

  return (
    <div className="relative w-full h-96 sm:h-60 overflow-hidden rounded-2xl flex justify-center items-center">
      <img src={BG} alt="Background" className="absolute w-[80%] h-[550px] object-cover sm:hidden md:hidden" />

      <div className="border-2 border-[#473664] w-[60%] sm:w-full md:w-full h-[70%] z-0 flex items-center justify-center bg-[#F7B9C4] relative">
        <div onClick={goToPrevious} className="cursor-pointer hover:scale-110 transition-transform">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-[#4A3267] text-[60px] transform -rotate-90 -mr-3 sm:text-[50px]"
          />
        </div>

        <div className="border-2 border-[#473664] w-[90%] h-full relative overflow-hidden">
          <div className="z-10 absolute inset-0 flex flex-col items-center justify-center text-center space-y-2">
            <img src={Logo} alt="Logo" className="w-56 opacity-90 sm:w-36" />
            <span className="text-[#DE638A] font-semibold w-[60%] text-xl absolute bottom-0 sm:text-sm sm:w-72">
              Support and Guidance: An Innovative Tool for PrimiMothers' Nutrition
            </span>
          </div>

          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100 / slides.length}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex h-full w-full flex-shrink-0 items-center justify-center"
                style={{ width: `${100 / slides.length}%` }}
              >
                {slide.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Slide ${index + 1} - Image ${i + 1}`}
                    className={`h-full object-cover ${slide.images.length < 4 ? 'w-full' : 'w-1/4'}`}
                    style={{
                      width: slide.images.length < 4 ? `${100 / slide.images.length}%` : '25%',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#efb9c6] to-transparent pointer-events-none" />
        </div>

        <div onClick={goToNext} className="cursor-pointer hover:scale-110 transition-transform">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-[#4A3267] text-[60px] transform rotate-90 -ml-3 sm:text-[50px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;
