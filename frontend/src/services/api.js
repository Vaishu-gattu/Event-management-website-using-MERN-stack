import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true // if you're using cookies
});

// Auth
export const login = (userData) => API.post('/auth/login', userData);
export const signup = (userData) => API.post('/auth/signup', userData);

// Add more APIs as needed
export default API;
