import React from "react";

export default function StoreImage({ imgSrc, children }) {
  return (
    <div
      className="w-full h-60 bg-no-repeat bg-cover flex items-end bg-black"
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="w-full flex p-5 items-center justify-between">
        <div className="flex">
          <div className="mr-2">{children[0]}</div>
          <div>{children[1]}</div>
        </div>
        <div className="w-20 h-4 bg-stone-950 rounded-2xl flex items-center justify-evenly">
          {children[2]}
          <p className="text-center text-rose-500 text-[9px] font-normal font-['Inter'] leading-3">
            50명 조회중
          </p>
        </div>
      </div>
    </div>
  );
}
