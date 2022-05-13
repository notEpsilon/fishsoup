import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8000/api'
});

API.defaults.withCredentials = true;

export default API;
