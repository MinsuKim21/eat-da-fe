import React, { useState } from 'react';

type PropsType = {
  data: {
    id: number;
    title: string;
    content: string;
  };
};

export default function Accordion({ data }: PropsType) {
  const [isOpen, setIsOpen] = useState(false);
  const { title, content } = data;
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white rounded shadow p-4 my-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <div className="text-black text-base font-semibold">{title}</div>
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
      {isOpen && <div className="mt-2 p-4 border-t border-gray-200">{content}</div>}
    </div>
  );
}
