import React from 'react';
import Carousel from './Carousel';

const images = ['/assets/banner1.png', '/assets/banner2.png', '/assets/banner3.png'];

export default function Banner() {
  return (
    <div className="w-full h-44 bg-zinc-300">
      <Carousel itemData={images} />
    </div>
  );
}
