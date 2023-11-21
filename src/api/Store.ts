import api from './index';

const PATH = '/stores';

// 스토어 인터페이스
export interface Store {
  id: number;
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

export type PostStore = Omit<Store, 'id'>;

export interface StoreHour {
  storeId: string;
  dayOfweek: string;
  storeHours: { openAt: string; closeAt: string }[];
}

//영업 시간 수정
export type PutStoreHours = {
  storeHours: { dayOfWeek: string; openAt: string; closeAt: string }[];
};

interface IGetStoreParams {
  storeId: number; // next store id
  categoryId: number;
  size: number;
}

export async function getStores(params: IGetStoreParams): Promise<{ data: Store[] }> {
  try {
    const res = await api.get(`${PATH}`, { params });
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function getStore(id: string): Promise<any> {
  try {
    const res = await api.post(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function postStore(data: Store): Promise<any> {
  try {
    const res = await api.post(`${PATH}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function patchStore(id, data: Store): Promise<any> {
  try {
    const res = await api.patch(`${PATH}/${id}`, data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteStore(id: string) {
  try {
    const res = await api.delete(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function getAllMenuInStore(id: string) {
  try {
    const res = await api.get(`${PATH}/${id}/menu`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function patchAllMenuInStore(id: string) {
  try {
    const res = await api.patch(`${PATH}/${id}/menu`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
