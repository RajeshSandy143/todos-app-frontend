import axios from 'axios';
import { getToken } from '../utils/storage';
import config from './config';

// Use a single source-of-truth for the backend URL so it can be overridden
// via environment (process.env.API_BASE_URL) when necessary.
const api = axios.create({
  baseURL: config.API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;