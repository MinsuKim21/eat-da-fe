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
    </div>
  );
}
