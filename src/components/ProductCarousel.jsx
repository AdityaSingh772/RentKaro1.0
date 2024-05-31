"use client";
import React, { useState, useEffect } from 'react';

// const images = [
//   '/random1.jpg',
//   '/random2.jpg',
//   '/random3.jpg',
//   '/random4.jpg'
// ];

const ProductCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide? 0 : currentIndex + 1;
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
    <div className="flex h-[35rem] p-9 w-1/2">
      <div 
        className="relative w-full h-full flex items-center justify-center bg-pink-100 rounded-lg overflow-hidden shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <img 
            src={images[currentIndex]} 
            alt={`Product Image ${currentIndex + 1}`} 
            className="object-cover w-full h-full transition-opacity duration-1000" 
          />
        </div>
        <div className="absolute inset-0 bg-white opacity-10"></div>
      </div>
    </div>
  );
};

export default ProductCarousel;

