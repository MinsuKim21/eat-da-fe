import React from 'react';
import Category from './Category';

export default function CategoryList() {
  return (
    <div className="w-96 h-14 bg-white shadow flex items-center">
      <div className="flex justify-start items-center gap-x-3 overflow">
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}
