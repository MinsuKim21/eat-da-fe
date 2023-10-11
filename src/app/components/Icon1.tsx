import Image from 'next/image';
import React from 'react'

type iconProps = {
    iconName: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function Icon1({ iconName, alt, width, height }: iconProps) {
    return (
        <div>
            <Image src={iconName} alt={alt} width={width} height={height}></Image>
        </div>
    )
}
