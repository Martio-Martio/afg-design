import Axios from 'axios';
import Cookies from "js-cookie";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_TEST_URL,
});

axios.interceptors.request.use(
  async config => {
    const tokenCook = Cookies.get("tokenCook");

    if (tokenCook) {
      config.headers.Authorization = `Bearer ${tokenCook}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {axios};
