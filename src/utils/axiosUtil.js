import axios from 'axios';
import EnvironmentUtil from "./EnvironmentUtil";

const defaultOptions = {
    baseURL: EnvironmentUtil.baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
};

let axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    return config;
});


export default axiosInstance;