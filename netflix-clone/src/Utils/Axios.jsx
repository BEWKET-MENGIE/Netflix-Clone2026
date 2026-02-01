  import axios from 'axios';

const API_KEY = 'd9b8dc710ba47ef28ecaba5e76ccf704';

const  instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    

});   
    

export default instance;  