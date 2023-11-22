import React, { ForwardedRef } from 'react';
import StoreImage from './StoreImage';

type StoreProp = {
  result: any;
};

export default function Store() {
  return (
    <div className="w-80 h-32 bg-white rounded-md relative flex justify-start items-center">
      <div className="p-2">
        <StoreImage imgSrc={""} alt={"Store"} />
      </div>
      <div className="self-start pt-3 pl-2">
        <p className="text-xl font-bold pb-1">음식점 이름</p>
        <p className="text-sm text-zinc-700">대표 메뉴명</p>
        <p className="text-sm">02-1234-1234</p>
      </div>
    </div>
  );
}

