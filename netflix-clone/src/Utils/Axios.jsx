  import axios from 'axios';

// VITE_API_KEY = d9b8dc710ba47ef28ecaba5e76ccf704;

const  instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});   
    

export default instance;  