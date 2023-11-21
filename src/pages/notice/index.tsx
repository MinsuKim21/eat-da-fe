import React from 'react';
import Accordion from '../../components/notice/Accordion';

export default function Notice() {
  return (
    <div className="w-full max-w-md h-full px-4">
      <h1 className="text-yellow-300 text-2xl font-extrabold leading-tight pt-16 pb-4">Notice</h1>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </div>
  );
}
