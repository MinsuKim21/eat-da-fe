import React from 'react';
import { useLocation } from 'react-router';

export default function StorePage() {
  const { pathname } = useLocation();
  const id = pathname.split('/')[2];
  return <div>test{id}</div>;
}
