import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bojandukovski-backend.herokuapp.com/api',
    //baseURL: 'http://localhost:8080/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})

export default instance;