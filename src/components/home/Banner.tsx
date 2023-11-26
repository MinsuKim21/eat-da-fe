import React from 'react';
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import { getBanners } from '../../api/Banner';

const images = ['/assets/banner1.png', '/assets/banner2.png', '/assets/banner3.png'];

export default function Banner() {
  const { data, isLoading } = useQuery({
    queryKey: ['getBanner'],
    queryFn: () => getBanners(),
  });
  return (
    <div className="w-full max-w-md h-52 bg-zinc-300">
      <Carousel itemData={images} />
    </div>
  );
}
