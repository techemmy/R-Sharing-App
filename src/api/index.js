import axios from "axios";
const env = import.meta.env;

const API_V1_URL = env.VITE_API_V1_URL;

const api = axios.create({
  baseURL: API_V1_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
