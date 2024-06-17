import axios from "axios";
import {baseURL} from "../constants/urls";
import {accessToken} from "../constants/token";

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {}
})

axiosInstance.interceptors.request.use(request=>{
    request.headers.set('Authorization', 'Bearer ' + accessToken)
    return request
})

export {
    axiosInstance
}