import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8000/api' // http://localhost:8000/api , https://fishsoupapp.herokuapp.com/api/
});

API.defaults.withCredentials = true;

export default API;
