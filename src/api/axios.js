// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://yazaki-api.onrender.com', // Update to your API base URL
});

export default axiosInstance;
