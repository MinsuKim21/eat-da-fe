export interface BaseBanner {
  id: number;
  order: number;
  imageUri: string;
  link: string;
  countOfClicks: number;
}

// 특정 배너 조회
export type Banner = BaseBanner;

//배너 수정
export type UpdateBanner = Omit<BaseBanner, "id" | "countOfClicks">;

// 배너 생성
export type NewBanner = UpdateBanner;

// 전체 배너 조회
export type Banners = BaseBanner[];