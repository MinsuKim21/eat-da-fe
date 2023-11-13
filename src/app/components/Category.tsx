"use client";
import React from "react";
import IconButton from "./IconButton";
import withList from "../hoc/withList";

function Category({ result }: { result: string }) {
  return (
    <button className="w-[84px] h-8 bg-white rounded-[15px] shadow flex justify-center items-center">
      <div className=" text-black text-sm font-semibold font-['Inter'] leading-[25px]">
        카테고리
      </div>
    </button>
  );
}
export default withList(Category, () => {}, false);
