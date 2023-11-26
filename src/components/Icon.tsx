import React from 'react';

type iconProps = {
  iconName: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Icon({ iconName, alt, width, height }: iconProps) {
  return (
    <div>
      <img src={iconName} alt={alt} width={width} height={height}></img>
    </div>
  );
}
