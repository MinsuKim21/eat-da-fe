import React from 'react';
import { useParams } from 'react-router';
// import withList from '../../hocs/withList';
import Store from '../../../components/store/Store';

export default function StorePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="w-full h-full flex flex-col gap-y-[0.5rem] bg-black">
      <Store id={id}></Store>
    </main>
  );
}
