import axios from "axios";

const api = axios.create({
   
    //baseURL: 'http://localhost/apiModelo/'
    // baseURL: 'http://aengenhariadesoftware.com.br/cpt/'
    baseURL: process.env.REACT_APP_API_URL

});

export default api;

 