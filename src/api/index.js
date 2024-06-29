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
  (response) => response,
  (error) => {
    console.log(error);
    if (error?.response?.status === 401) {
      document.cookie = "token=";
      document.location.assign("/login");
      return;
    }

    if (error?.code === "ERR_NETWORK") {
      console.log("Something went wrong");
      alert("Check your internet connection");
    }
    return Promise.reject(error);
  },
);

export default api;
