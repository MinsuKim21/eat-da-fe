import React from 'react';

export default function Skeleton() {
  return (
    <div className="w-full h-full space-y-4 p-4 animate-pulse">
      <div className="h-8 bg-gray-300 rounded"></div> {/* 텍스트 라인 */}
      <div className="h-48 bg-gray-300 rounded"></div> {/* 이미지 영역 */}
      <div className="h-4 bg-gray-300 rounded"></div> {/* 작은 텍스트 라인 또는 버튼 */}
    </div>
  );
}
