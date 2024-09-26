import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://user-contacts-backend.vercel.app',
  timeout: 10000,
});
