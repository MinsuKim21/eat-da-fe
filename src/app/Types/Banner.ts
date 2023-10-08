// 특정 배너 조회
type Banner = {
  id: number;
  order: number;
  imageUri: string;
  link: string;
  countOfClicks: number;
};

//배너 수정
type UpdateBanner = {
  order: number;
  imageUri: string;
  link: string;
};
// 배너 생성
type NewBanner = UpdateBanner;

// 전체 배너 조회
type Banners = Banner[];
