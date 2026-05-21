import axios from "axios";

const custome_axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_BACKEND,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
  timeout: 5000,
});

export default custome_axios;