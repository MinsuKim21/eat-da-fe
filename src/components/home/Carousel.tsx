import React from 'react';

type propsType = {
  itemData: string[];
};

export default function Carousel({ itemData }: propsType) {
  return (
    <div className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide">
      {itemData?.map((image, index) => (
        <div key={index} className="inline-block snap-center bg-cover">
          <img src={image} className="w-full h-full object-center" alt={image} />
        </div>
      ))}
    </div>
  );
}
