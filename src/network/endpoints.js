import { axiosInstance } from "./api";;

export const getCountries = async ( page, itemsPerPage) => {
    let url = 'country?format=json';
    if (page) {
        url += `&page=${page}`;
    }
    if (itemsPerPage) {
        url += `&per_page=${itemsPerPage}`;
    }
    return await axiosInstance.get(url);
}

 export const getCountryByName = async (name) =>{
    return await axiosInstance.get(`country/${name}?format=json`);
}