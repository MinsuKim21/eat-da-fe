import api from './index';

const PATH = '/banner';

export interface BaseBanner {
  id: number;
  order: number;
  imageUri: string;
  link: string;
  countOfClicks: number;
}

// 특정 배너 조회
export type GetBanner = BaseBanner;

//배너 수정
export type PatchBanner = Omit<BaseBanner, 'id' | 'countOfClicks'>;

// 배너 생성
export type PostBanner = PatchBanner;

// 전체 배너 조회
export type GetBanners = BaseBanner[];
