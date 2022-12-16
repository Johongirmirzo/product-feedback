import axios from "axios"
import {BASE_URL} from "../config/endpoints";
import {logoutUser} from "./user"
 
export const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
})

 


API.interceptors.response.use(response => {
    return response
}, async error => {
    if(error.response.data.isLoginRequired) {
        await logoutUser()
        localStorage.removeItem("token")
        localStorage.removeItem('admin')
        window.location.href = "/login"
    } else {
        return error.response
    }
})