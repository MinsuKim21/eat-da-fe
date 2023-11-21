import api from './index';

const PATH = '/menu';

export interface Menu {
  id: number;
  name: string;
  price: string;
  imageAddress?: string;
}

export async function getMenus(): Promise<{ data: Menu[] }> {
  try {
    const res = await api.get(`${PATH}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function patchMenu(id, data: Menu): Promise<any> {
  try {
    const res = await api.patch(`${PATH}/${id}`, data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteMenu(id: number) {
  try {
    const res = await api.delete(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
