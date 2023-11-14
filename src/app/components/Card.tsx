import Image from 'next/image';
import React from 'react';

export default function Card() {
  return (
    <div className="w-80 h-32 relative  bg-zinc-50 rounded-md mx-1">
      <div className="flex justify-start">
        <div className="p-2 relative">
          <Image className="w-24 rounded-xl bg-zinc-500 aspect-square" src={'/assets/Untitled.png'} alt="test" width={100} height={100} />
        </div>
        <div className="flex flex-col items-start">
          <p className=" font-bold text-lg">음식점이름</p>
          <p className="">대표 매뉴명</p>
          <p className="">02-1234-5678</p>
        </div>
      </div>
    </div>
  );
}
