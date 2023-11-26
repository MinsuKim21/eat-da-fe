import React from 'react';
import Accordion from '../../components/notice/Accordion';
import { useQuery } from '@tanstack/react-query';
import { getNotices } from '../../api/Notice';
import { redirect } from 'react-router';
import Skeleton from '../../components/Skeleton';

export default function Notice() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notice'],
    queryFn: () => getNotices(),
  });

  if (error) {
    console.log('🚀 ~ Notice ~ error:', error);
    redirect('/error');
  }

  return (
    <div className="w-full max-w-md h-full px-4">
      <h1 className="text-yellow-300 text-2xl font-extrabold leading-tight pt-16 pb-4">Notice</h1>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {data?.body.map((data) => {
            return <Accordion key={data.id} data={data} />;
          })}
        </>
      )}
    </div>
  );
}
