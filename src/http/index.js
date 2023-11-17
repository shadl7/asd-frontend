import axios from "axios";
import ScriptService from "../services/ScriptService";
import CollectionService from "../services/CollectionService";

export const API_URL = "http://shadl7.ru:5000/api";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

$api.interceptors.response.use( config => {
    return config;
}, async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Пользователь не авторизован')
        }
    }
    throw error;
});

export default $api;

export const getScripts = async (userid) => {
    try {
        const response = await ScriptService.GetScripts(userid)
        console.log(response);
        return response.data.scripts
    } catch (e) {
        console.log(e.response?.data?.message);
    }
};

export const getCollections = async (userid) => {
    try {
        const response = await CollectionService.GetCollections(userid)
        console.log(response);
        return response.data.collections;
    } catch (e) {
        console.log(e.response?.data?.message);
    }
};
