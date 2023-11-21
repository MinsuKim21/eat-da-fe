import React from 'react';
import IconButton from '../IconButton';

export default function Header() {
  return (
    <div className="w-full max-w-md h-32">
      <div className="w-full max-w-md h-32 left-0 top-0 absolute bg-green-400" />
      <div className="w-full max-w-md h-32 left-0 top-0 absolute bg-gray-600 bg-opacity-40">
        <div className="w-full h-full flex flex-col justify-center  gap-y-6 text-white px-6">
          <div className="w-full flex justify-between ">
            <h1 className="text-2xl font-bold ">Eat-da</h1>
            <IconButton onClick={() => alert('개발중 빨른시일내 업데이트함')}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </IconButton>
          </div>
          <div className="flex justify-center">
            <div onClick={() => alert('개발중 빨른시일내 업데이트함')} className="w-full z-10 bg-white text-gray-200 py-1 px-2 rounded-full">
              search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
