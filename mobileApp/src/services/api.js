import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://um-trem-de-cume-api.onrender.com'
});

export default api;