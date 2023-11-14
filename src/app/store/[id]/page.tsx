'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function StorePage() {
  const path = usePathname();
  const id = path.split('/')[2];
  return <div>test{id}</div>;
}
