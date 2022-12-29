import axios from "axios";
import config from "../config.json";
import localStorageService from "./localStorage.service";

const http = axios.create({ baseURL: config.apiEndPoint });

http.interceptors.request.use((config) => {
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
        };
    }
    return config;
});

const httpService = {
    get: http.get,
};

export default httpService;
