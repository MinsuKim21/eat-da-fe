import React from "react";
import StoreImage from "./StoreImage";
import { ReactComponent as PackageIcon } from "../../assets/packageIcon.svg";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";

export default function Store() {
  return (
    <div className="w-80 h-32 bg-white rounded-md flex">
      <div className="w-full flex justify-start items-center">
        <div className="p-2 relative">
          <StoreImage imgSrc={""} alt={"Store"} />
          <div className="w-20 h-4 bg-stone-950 rounded-2xl flex items-center absolute bottom-4 left-4">
            <EyeIcon className="mx-1" />
            <p className=" text-white text-[9px] leading-3 ">50명 조회중</p>
          </div>
        </div>
        <div className="self-start pt-3 pl-2 flex flex-col">
          <p className="text-xl font-bold pb-1">음식점 이름</p>
          <p className="text-sm text-zinc-700">대표 메뉴명</p>
          <p className="text-sm text-zinc-700">02-1234-1234</p>
        </div>
        <PackageIcon className="self-end my-3 ml-auto mr-3" />
      </div>
    </div>
  );
}
