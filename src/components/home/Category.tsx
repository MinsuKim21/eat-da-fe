import React from 'react';
import IconButton from '../IconButton';
import withList from '../../hocs/withList';

export default function Category({ data }) {
  return (
    <button className="w-20 h-full bg-white rounded-full shadow inline-block px-2 py-1 mx-2">
      <div className=" text-black text-sm font-semibold font-['Inter'] leading-[25px]">{data.name}</div>
    </button>
  );
}
