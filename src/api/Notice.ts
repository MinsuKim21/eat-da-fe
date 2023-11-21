import api from './index';

const PATH = '/notices';

export interface Notice {
  id: number;
  title: string;
  content: string;
  createAt: string;
}

export async function getNotices(): Promise<{ data: Notice[] }> {
  try {
    const res = await api.get(`${PATH}`);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function getNotice(id: number): Promise<any> {
  try {
    const res = await api.post(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function postNotice(data: Notice): Promise<any> {
  try {
    const res = await api.post(`${PATH}`, data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

export async function patchNotice(id, data: Notice): Promise<any> {
  try {
    const res = await api.patch(`${PATH}/${id}`, data);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export async function deleteNotice(id: number) {
  try {
    const res = await api.delete(`${PATH}/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}
