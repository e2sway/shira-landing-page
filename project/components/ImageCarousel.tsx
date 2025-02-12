'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { PhoneMockup } from './PhoneMockup'

const carouselImages = [
  '/screenshot2.png',
  '/screenshot3.png',
  '/screenshot4.png',
  '/screenshot5.png'
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <PhoneMockup slideFrom="right">
      {carouselImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`App screenshot ${index + 2}`}
          fill
          priority={index === 0}
          sizes="350px"
          className={`object-contain transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </PhoneMockup>
  );
} 