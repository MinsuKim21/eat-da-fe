import React from 'react';
import Category from './Category';


export default function CategoryList() {
  return (
    <div className="w-full max-w-md h-14 bg-white shadow flex items-center">
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
