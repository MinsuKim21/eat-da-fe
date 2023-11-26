import api from './index';

const PATH = '/banner';

export interface Banner {
  id: number;
  order: number;
  imageUri: string;
  link: string;
  countOfClicks: number;
}

// 특정 배너 조회
export type GetBanner = Banner;

//배너 수정
export type PatchBanner = Omit<Banner, 'id' | 'countOfClicks'>;

// 배너 생성
export type PostBanner = PatchBanner;

// 전체 배너 조회
export type GetBanners = Banner[];

export async function getBanners(): Promise<{ data: Banner[] }> {
  try {
    const res = await api.get(`${PATH}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function postBanner(data: PostBanner): Promise<{ id: string }> {
  try {
    const res = await api.post(`/banners`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}
