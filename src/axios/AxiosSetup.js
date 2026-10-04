import axios from "axios";

const custome_axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_BACKEND,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('token'),
  },
  // Render's free tier can take a while to wake up — don't time out on cold starts
  timeout: 30000,
});

custome_axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default custome_axios;