import {API} from "../index"
import decode from "jwt-decode"
import {ENDPOINTS} from "../../config/endpoints"

interface UserData {
    email: string;
    password: string;
}

interface RegisterDataInterface extends UserData {
    username: string;
    confirmPassword: string;
}
interface LoginDataInterface extends UserData {
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

 
const registerUser = async (userData: RegisterDataInterface)=>{
    return await API.post(ENDPOINTS.REGISTER_USER, userData)
};
const loginUser = async (userData: LoginDataInterface)=>{
    return await API.post(ENDPOINTS.LOGIN_USER, userData)
}
const logoutUser = async ()=>{
    return await API.delete(ENDPOINTS.LOGOUT_USER)
}
const changeEmail = async (emailData: EmailData, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.post(ENDPOINTS.CHANGE_EMAIL, emailData,
        {headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }})
}
const changeUsername = async (userData: UsernameData, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.post(ENDPOINTS.CHANGE_USERNAME, userData,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                RefreshToken: `Bearer ${refreshToken}`
            }
        })
}
const changePassword = async (passwordData: PasswordData, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.post(ENDPOINTS.CHANGE_PASSWORD, passwordData,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                RefreshToken: `Bearer ${refreshToken}`
            }
        })
}
const changeProfilePicture = async (userId: string, formData: any, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.post(`${ENDPOINTS.CHANGE_PROFILE_PICTURE}/${userId}`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}
const deleteAccount = async (userId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.delete(`${ENDPOINTS.DELETE_ACCOUNT}/${userId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}

export {
    registerUser,
    loginUser,
    logoutUser,
    changeEmail,
    changeUsername,
    changePassword,
    changeProfilePicture,
    deleteAccount,
}