import axios from "axios";

const api = axios.create({
   
    //baseURL: 'http://localhost/apiModelo/'
    baseURL: 'http://aengenhariadesoftware.com.br/cpt/'

    

});

export default api;

 //caminho onde estão as minahs apis
    //baseURL: 'http://192.168.15.3/apiModelo/'
    //baseURL: 'http://10.0.0.100:3333/apiModelo/',
    //baseURL: 'http://10.0.2.2:3333'
    //baseURL: 'http://10.0.0.100/apiModelo/'