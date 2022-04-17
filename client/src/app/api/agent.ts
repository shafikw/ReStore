import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const sleep = () => new Promise(resolve => setTimeout(resolve, 0));

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(key);
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            
            toast.error(data.title);
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
});

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string,body:{}) => axios.post(url,body).then(responseBody),
    put: (url: string,body:{}) => axios.put(url,body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
};

const Catalog = {
    list: () => requests.get("Products/getProducts"),
    details:(id:number)=>requests.get(`Products/getProduct/${id}`)
};

const TestError = {
    get404Error: () => requests.get("Buggy/not-found"),
    get400Error: () => requests.get("Buggy/bad-request"),
    get401Error: () => requests.get("Buggy/Unauthorized"),
    getValidationError: () => requests.get("Buggy/validation-error"),
    get500Error: () => requests.get("Buggy/server-error"),
    shafi: () => {  }
};



const agent = {
    Catalog,
    TestError,
};



export default agent;
