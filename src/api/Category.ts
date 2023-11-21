import api from './index';

const PATH = '/categories';

export interface Category {
  id: number;
  name: string;
}

export async function getCategories(): Promise<{ data: Category[] }> {
  try {
    const res = await api.get(`${PATH}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function getCategory(id: number): Promise<any> {
  try {
    const res = await api.post(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function postCategory(data: Category): Promise<any> {
  try {
    const res = await api.post(`${PATH}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function patchCategory(id, data: Category): Promise<any> {
  try {
    const res = await api.patch(`${PATH}/${id}`, data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteCategory(id: number) {
  try {
    const res = await api.delete(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
