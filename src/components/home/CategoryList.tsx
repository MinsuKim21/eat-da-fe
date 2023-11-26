import React from 'react';
import Category from './Category';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../api/Category';
import Skeleton from '../Skeleton';

export default function CategoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['category'],
    queryFn: () => getCategories(),
  });
  if (isLoading) {
    return (
      <div className="h-14">
        <Skeleton />;
      </div>
    );
  }

  if (error || data?.body.length === 0) {
    return (
      <div className="w-full max-w-md h-14 bg-white shadow flex items-center">
        <div className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-3">
          <Category data={{ name: '카테고리' }} />
          <Category data={{ name: '카테고리' }} />
          <Category data={{ name: '카테고리' }} />
          <Category data={{ name: '카테고리' }} />
          <Category data={{ name: '카테고리' }} />
        </div>
      </div>
    );
  }
  return (
    <div className="w-full max-w-md h-14 bg-white shadow flex items-center">
      <div className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide py-3">
        {data?.data?.map((category) => (
          <Category key={category.id} data={category} />
        ))}
      </div>
    </div>
  );
}
