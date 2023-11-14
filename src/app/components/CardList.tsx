import React from 'react';
import Card from './Card';

export default function CardList() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
