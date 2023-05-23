import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://um-trem-de-cume-api.onrender.com',
    headers: {
        Accept: 'application/json',
       'Content-Type': 'application/json'
     }
});

export default api;