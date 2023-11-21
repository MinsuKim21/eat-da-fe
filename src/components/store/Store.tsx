import React, { ForwardedRef } from 'react';
import IconButton from '../IconButton';
import Icon1 from '../Icon';
import location from '@../../public/assets/location.svg';
import call from '@../../public/assets/call.svg';
import eye from '@../../public/assets/eye.svg';
import withList from '../../hocs/withList';

type StoreProp = {
  result: any;
};

function Store({ result }: StoreProp) {
  return (
    <div>
      <div className="w-full max-w-md h-[120px] bg-zinc-700 rounded-lg flex justify-between pt-[15px] px-[15px]">
        <div>
          <div className="text-[15px] font-bold font-['Inter'] leading-[18px] mb-[2px]">음식점 이름</div>
          <div className=" text-[10px] font-medium font-['Inter'] leading-[14px] mb-[28px]">주소</div>
          <div className=" text-xs font-semibold font-['Inter'] mb-[4px]">영업일/시간</div>
          <div className="w-20 h-4 bg-stone-950 rounded-2xl flex justify-evenly items-center">
            <Icon1 iconName={eye} alt="조회 이미지"></Icon1>
            <div className=" text-white text-[9px] font-normal font-['Inter'] leading-3 ">50명 조회중</div>
          </div>
        </div>
        <div>
          <IconButton className="w-10 h-10 bg-neutral-950 rounded-full flex items-center justify-center mb-[10px]">
            <Icon1 iconName={location} alt="위치 이미지"></Icon1>
          </IconButton>
          <IconButton className="w-10 h-10 bg-neutral-950 rounded-full flex items-center justify-center">
            <Icon1 iconName={call} alt="전화 이미지"></Icon1>
          </IconButton>
        </div>
      </div>
      <div className="w-[344px] h-10 bg-black rounded-[9px] flex justify-center items-center">
        <IconButton className="w-[162px] h-5 text-white text-[17px] font-extrabold font-['Inter'] leading-snug">MENU</IconButton>
      </div>
    </div>
  );
}

export default withList(Store, () => {}); // FIXME:
