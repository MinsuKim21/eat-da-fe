import React from 'react';
import { ReactComponent as CallIcon } from '../../assets/call.svg';
import { ReactComponent as LocationIcon } from '../../assets/location.svg';
import { ReactComponent as EyeIcon } from '../../assets/eye.svg';
import StoreImage from './StoreImage';
import Menu from './Menu';
import { getStore } from '../../api/Store';
import { useQuery } from '@tanstack/react-query';
import NotFoundPage from '../../pages/err';
import Skeleton from '../Skeleton';
import { getMenus } from '../../api/Menu';
export default function Store({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['getStore', id],
    queryFn: () => getStore(id),
  });
  const { data: menuData, isLoading: isMenuLoading } = useQuery({
    queryKey: ['getMenu', id],
    queryFn: () => getMenus(),
  });
  console.log('🚀 ~ Store ~ data:', data);
  console.log('🚀 ~ Store ~ menuData:', menuData);

  if (error) {
    console.log('🚀 ~ Store ~ error:', error);
    // return <NotFoundPage />;
  }

  if (isLoading) {
    return (
      <>
        <div className="w-full max-w-md  bg-white rounded-md">
          <Skeleton />;
        </div>
        <div className="p-5">
          <div className="text-base font-bold font-['Inter'] leading-snug mb-5">음식점 이름</div>
          <div className=" text-red-500 text-2xl font-semibold font-['Inter'] leading-snug">MENU</div>
          <Skeleton />
        </div>
      </>
    );
  }

  return (
    <div className="w-full max-w-md  bg-white rounded-md">
      <StoreImage imgSrc={''}>
        <CallIcon />
        <LocationIcon />
        <EyeIcon />
      </StoreImage>
      <div className="p-5">
        <div className="text-base font-bold font-['Inter'] leading-snug mb-5">음식점 이름</div>
        <div className=" text-red-500 text-2xl font-semibold font-['Inter'] leading-snug">MENU</div>
        {/* {menuData?.body.map(() => (
          <Menu></Menu>
        ))} */}
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
        <Menu></Menu>
      </div>
    </div>
  );
}
