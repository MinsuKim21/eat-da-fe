import React from 'react';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="w-96 h-96 relative bg-white">
      <div className="w-56 h-16 left-[82px] top-[334px] absolute text-center text-yellow-300 text-3xl font-bold font-['Inter'] leading-loose">
        화면을 <br />
        불러오지 못했어요
      </div>
      <div className="w-56 h-14 left-[72px] top-[491px] absolute bg-white rounded-2xl border-2 border-black border-opacity-20" />
      <div
        className="w-24 h-8 left-[140px] top-[499px] absolute text-center text-zinc-900 text-opacity-60 text-2xl font-bold font-['Inter'] leading-10"
        onClick={() => navigate('/')}>
        홈으로
      </div>
      <div className="w-96 h-8 pl-32 pr-28 pt-5 pb-2 left-[2px] top-[778px] absolute justify-center items-center inline-flex">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
      <div className="pb-1 left-[-4px] top-0 absolute justify-start items-start gap-32 inline-flex">
        <div className="w-36 self-stretch pt-5 pb-3.5 justify-center items-center inline-flex">
          <div className="text-center text-black text-base font-['SF Pro'] leading-snug">9:41</div>
        </div>
        <div className="w-36 h-14 relative flex-col justify-start items-start flex">
          <div className="w-7 h-3 relative">
            <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded border border-black" />
            <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-black rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
