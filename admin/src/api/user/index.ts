import {API} from "../index"
import {ENDPOINTS} from "../../config/endpoints"

interface UserData {
    email: string;
    password: string;
}
interface EmailData extends UserData {
    originalEmail: string;
}
interface UsernameData {
    originalUsername: string;
    username: string;
    password: string;
}
interface PasswordData {
    username: string;
    currentPassword: string;
    newPassword: string;
    newConfirmPassword: string;
}

 
const loginUser = async (userData: UserData)=>{
    return await API.post(ENDPOINTS.LOGIN_USER, userData)
}
const logoutUser = async ()=>{
    return await API.delete(ENDPOINTS.LOGOUT_USER)
}
const changeEmail = async (emailData: EmailData, accessToken: string, refreshToken: string) => {
    return await API.post(ENDPOINTS.CHANGE_EMAIL, emailData,{
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
const changeUsername = async (userData: UsernameData, accessToken: string, refreshToken: string) => {
    return await API.post(ENDPOINTS.CHANGE_USERNAME, userData,{
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
const changePassword = async (passwordData: PasswordData, accessToken: string, refreshToken: string) => {
    return await API.post(ENDPOINTS.CHANGE_PASSWORD, passwordData,{
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
 

export {
    loginUser,
    logoutUser,
    changeEmail,
    changeUsername,
    changePassword,
}