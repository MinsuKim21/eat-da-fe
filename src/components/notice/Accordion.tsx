import React, { useState } from 'react';

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white rounded shadow p-4 my-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <div className="text-black text-base font-semibold">이벤트안내</div>
        <div className="text-black text-base font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 p-4 border-t border-gray-200">
          {/* 아코디언 컨텐츠 내용을 여기에 추가하세요 */}
          여기에 아코디언이 펼쳐졌을 때 보여줄 내용을 넣습니다.
        </div>
      )}
    </div>
  );
}
