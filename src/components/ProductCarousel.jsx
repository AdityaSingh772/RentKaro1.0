"use client"
import React, { useState } from 'react';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg'
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
  <div className="flex  h-[25rem] p-9 w-full">

  
    <div className="relative w-full h-full flex items-center justify-center bg-fuchsia-400">
    <button onClick={handlePrev} className="absolute left-0 bg-gray-500 text-white p-2 rounded z-10">Prev</button>
    <div className="w-full h-full flex items-center justify-center">
      <img src={images[currentIndex]} alt={`Product Image ${currentIndex + 1}`} className="object-cover max-w-full max-h-full" />
    </div>
    <button onClick={handleNext} className="absolute right-0 bg-gray-500 text-white p-2 rounded z-10">Next</button>
  </div>
  </div>
  );
};

export default ProductCarousel;
