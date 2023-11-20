import React, { useState, useRef } from 'react';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const images = ['/assets/banner1.png', '/assets/banner2.png'];

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 75) {
      setCurrentIndex((currentIndex + 1) % images.length);
    } else if (touchStart.current - touchEnd.current < -75) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {images.map((image, index) => (
        <div key={index} className={`snap-center ${currentIndex === index ? 'scale-110' : 'scale-100'}`} style={{ minWidth: '320px' }}>
          <img src={image} alt={`Carousel Image ${index + 1}`} width={320} height={180} className="w-96 h-44" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
