import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:'https://api.worldbank.org/v2/',
    withCredentials: false,
    headers: {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
});

