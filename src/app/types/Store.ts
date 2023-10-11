// 스토어 공통 타입
export type Store = {
  name: string;
  displayName?: string | null;
  address: string;
  contact: string;
  imageUri?: string | null;
  location?: {
    latitude: number;
    longitude: number;
  } | null;
  cateogyId: string;
};

// 카테고리 기반 가게 조회
export type CategoryStore = Store & {
  id: string;
};

//가게 생성
export type NewStore = Store;

// 영업시간 조회 성공 특정 요일
export type StoreHour = {
  storeId: string;
  dayOfweek: string;
  storeHours: { openAt: string; closeAt: string }[];
};

// 영업시간 조회 성공
export type StoreHours = StoreHour[];

//영업 시간 수정
export type UpdateStoreHours = {
  storeHours: { dayOfWeek: string; openAt: string; closeAt: string }[];
};

// 메뉴 공통 타입 추출
export type BaseMenu = {
  name: string;
  price: number;
  imageUri: string | null;
};

//메뉴 조회
export type Menu = BaseMenu & {
  id: number;
};

// 메뉴 전체 조회
export type Menus = Menu[];

//메뉴 생성
export type NewMenu = BaseMenu;

//메뉴 수정
export type UpdateMenu = {
  name?: string;
  price?: string;
  imageUri?: string | null;
}; // 필드 중 하나만 있어도 된다
