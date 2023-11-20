import api from './index';

// 스토어 인터페이스
export interface BaseStore {
  id: string;
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
}

// 카테고리 기반 가게 조회
export type GetCategoryStore = BaseStore;

// 가게 생성
export type PostStore = Omit<BaseStore, 'id'>;

// 영업시간 인터페이스
export interface BaseStoreHour {
  storeId: string;
  dayOfweek: string;
  storeHours: { openAt: string; closeAt: string }[];
}

// 영업시간 특정 요일 조회 성공
export type GetStoreHour = BaseStoreHour;

// 영업시간 조회 성공
export type GetStoreHours = BaseStoreHour[];

//영업 시간 수정
export type PutStoreHours = {
  storeHours: { dayOfWeek: string; openAt: string; closeAt: string }[];
};

// 메뉴 인터페이스
export interface BaseMenu {
  id: number;
  name: string;
  price: number;
  imageUri?: string | null;
}

//메뉴 조회
export type GetMenu = BaseMenu;

// 메뉴 전체 조회
export type GetMenus = GetMenu[];

//메뉴 생성
export type PostMenu = Omit<BaseMenu, 'id'>;

//메뉴 수정
export type PatchMenu = Partial<Omit<BaseMenu, 'id'>>; // 필드 중 하나만 있어도 된다
