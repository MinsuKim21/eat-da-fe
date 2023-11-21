import React from 'react';
import Category from './Category';
import Carousel from './Carousel';

export default function CategoryList() {
  return (
    <div className="w-96 h-14 bg-white shadow flex items-center">
      <div className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-3">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}
