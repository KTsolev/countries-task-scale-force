import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'http://api.worldbank.org/v2/',
});

