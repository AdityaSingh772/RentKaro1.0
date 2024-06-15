"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div className="flex h-full px-9 py-[6.5rem]  w-full">
      <div 
        className="relative w-full h-full flex items-center justify-center bg-black border-2 border-blue-500 rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          <Image
            src={images[currentIndex]}
            alt={`Product Image ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>
    </div>
  );
};

export default ProductCarousel;
