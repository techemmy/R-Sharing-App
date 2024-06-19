import axios from "axios";
const env = import.meta.env;

const API_V1_URL = env.VITE_API_V1_URL;

const api = axios.create({
  baseURL: API_V1_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    if (response?.data && response.data?.statusCode === 401) {
      // document.cookie = "token=";
      // document.location.assign("/login");
    }
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      // document.cookie = "token=";
      // document.location.assign("/login");
    }
    return error;
  },
);
export default api;
