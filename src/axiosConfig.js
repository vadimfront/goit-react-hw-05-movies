import axios from 'axios';
import { API_KEY, API_URL } from 'constants/constantsApi';

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export { axiosClient };
