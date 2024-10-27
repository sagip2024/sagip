import React, { useState, useEffect, useRef } from 'react';

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 4000);
  };

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoSlide();
  };

  useEffect(() => {
    if (autoSlide) {
      startAutoSlide();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoSlide, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
    resetAutoSlide();
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    resetAutoSlide();
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    resetAutoSlide();
  };

  return (
    <div className='bg-purple-400 relative w-[70%] sm:w-full md:w-full h-80 sm:h-60 overflow-hidden rounded-2xl mt-5 z-0'>
      <div
        className='absolute inset-0 flex transition-transform duration-1000 ease-in-out'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className='w-full h-full flex-shrink-0 flex justify-center items-center'>
            <img
              src={img.img}
              alt='Programs'
              className='w-[90%] h-auto max-h-full object-contain'
            />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-800 focus:outline-none text-3xl px-5 font-bold'
      >
        &lt;
      </button>
      
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-800 focus:outline-none text-3xl px-5 font-bold'
      >
        &gt;
      </button>
      <div className='absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-pink-500 to-transparent pointer-events-none' />
    </div>
  );
}

export default Slider;
