import axios from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_URL, withCredentials: true, timeout: 20000 });

instance.interceptors.response.use((response) => response, errorHandler);

async function errorHandler(e: any) {
  try {
    if (
      (e.response.status === 401 && e.response.data.message === 'invalid_session') ||
      (e.response.status === 403 && e.response.data.message === 'forbidden')
    ) {
      window.open('/', '_self');
    }
  } catch (e) {}
  throw e;
}

export default instance;
