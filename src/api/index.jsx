// fallback: https://r-sharing-app.onrender.com/api/v1
export const API_V1_URL = process.env.API_V1_URL;

import axios from 'axios';

const api = axios.create({
  baseURL: API_V1_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;

