import axios from "axios";

const api = axios.create({
    baseURL: "http://www.mocky.io/v2/",
    timeout: 60000
});

api.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

export default api;
