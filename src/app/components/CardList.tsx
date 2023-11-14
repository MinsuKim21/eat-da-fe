import React from 'react';
import Card from './Card';

export default function CardList() {
  const dummy = [
    {
      id: 1,
      name: '레드앤 그린버거',
      menu: [
        { id: 1, menu: '오리지날치즈버거', price: ' 8,900', imgSrc: '/assets/Untitled (7).png' },
        { id: 2, menu: '머쉬룸 트리플 베이컨 버거', price: ' 11,400', imgSrc: '/assets/Untitled (6).png' },
        { id: 3, menu: '쉬림프 칠리 버거 ', price: ' 11,400', imgSrc: '/assets/Untitled (5).png' },
        { id: 4, menu: '화와이안 버거', price: ' 10,200', imgSrc: '/assets/Untitled (4).png' },
      ],
      imgSrc: '/assets/Untitled (3).png',
    },
    {
      id: 2,
      name: '인생감성술집 응암오거리점',
      menu: [
        { id: 1, menu: '바지락술찜', price: '19900', imgSrc: '/assets/Untitled (2).png' },
        { id: 2, menu: '인생보쌈', price: '24,900', imgSrc: '/assets/Untitled (3).png' },
        { id: 3, menu: '두부김치', price: '18,900', imgSrc: '/assets/Untitled (7).png' },
        { id: 4, menu: '바지락로제파스타 + 치킨 술찜', price: '24,900', imgSrc: '/assets/Untitled (6).png' },
      ],
      imgSrc: '/assets/Untitled (1).png',
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-y-[0.5rem]">
      {dummy.map((item) => {
        const { id, ...rest } = item;
        return <Card key={id} props={rest} />;
      })}
    </div>
  );
}
