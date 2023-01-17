import axios from "axios";

export const BASE_URL = 'https://fakestoreapi.com/products';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    // timeout: 1000
});

export const network = {
    getAll: async (url) => {

        let responseData = [];
        await axiosInstance.get(`${url}`)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                console.log('Error', err);
                throw err
            })

        return responseData;
    },
    getLimitedProducts: async (url,lim) => {

        let responseData = [];
        await axiosInstance.get(`${url}?limit=${lim}`)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                console.log('Error', err);
                throw err
            })

        return responseData;
    },
    getcatagoryProduct: async (url,catagoryname) =>{
        let responseData = [];
        await axiosInstance.get(`${url}/category/${catagoryname}`)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                console.log('Error', err);
                throw err
            })

        return responseData;
    },
    getCategories: async (url,category) => {
        let responseData = [];
        await axiosInstance.get(`${url}/${category}`)
            .then(res => {
                responseData = res.data;
            })
            .catch(err => {
                console.log('Error', err);
                throw err
            })

        return responseData;
    },
    getById: async (url, id) => {

        let response = {}
        await axiosInstance.get(`${url}/${id}`)
            .then(res => {
                response = res.data;
            });
        if (response == null) {
            throw "404 data not found!!"
        }
        return response;

    },
}
