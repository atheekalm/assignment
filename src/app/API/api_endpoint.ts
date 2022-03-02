import axios, { AxiosResponse }  from 'axios';

axios.defaults.baseURL = "https://my-json-server.typicode.com/prasadhewage/ecommerce/";

const responcebody = (responce: AxiosResponse) => responce.data;

const requests = {
    get: (url: string) => axios.get(url).then(responcebody)
}

const products = {
    getproducts: () => requests.get('shipments'),
}

const api_endpoint = {
    products
}


export default api_endpoint;

