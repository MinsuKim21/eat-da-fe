import React from "react";

export default function Menu() {
  return (
    <div className="w-96 h-24 my-2 bg-white rounded shadow flex justify-start items-center">
      <div className="p-2">
        <img
          className="w-16 h-16 rounded-2xl bg-zinc-300"
          src={""}
          alt="Menu"
        ></img>
      </div>
      <div className="pl-1">
        <div className="text-2xl font-semibold leading-snug">음식 이름</div>
        <div className="text-base font-semibold leading-snug">20,000원</div>
      </div>
    </div>
  );
}
