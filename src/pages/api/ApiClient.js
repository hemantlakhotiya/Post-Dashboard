import axios from "axios";

export const ApiClient = axios.create({
    baseURL: "http://localhost:3000/api",
    
    error(error) {
        return Promise.reject(error);
    }
});