import React from "react";
import { ReactComponent as CallIcon } from "../../assets/call.svg";
import { ReactComponent as LocationIcon } from "../../assets/location.svg";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import StoreImage from "./StoreImage";
import Menu from "./Menu";
export default function Store({ id }) {
  return (
    <div className="w-full max-w-md  bg-white rounded-md">
      <StoreImage imgSrc={""}>
        <CallIcon />
        <LocationIcon />
        <EyeIcon />
      </StoreImage>
      <div className="p-5">
        <div className="text-base font-bold font-['Inter'] leading-snug mb-5">
          음식점 이름
        </div>
        <div className=" text-red-500 text-2xl font-semibold font-['Inter'] leading-snug">
          MENU
        </div>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
      </div>
    </div>
  );
}
