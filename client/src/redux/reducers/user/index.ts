import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSliceInterface {
    id: string;
    username: string;
    email: string;
    userPhoto: string;
    isAdmin: boolean;
    isThirdPartyAuth: boolean;
    accessToken: string;
    refreshToken: string;
}
const user = JSON.parse(localStorage.getItem("user") as "{}")

const initialState: UserSliceInterface = {
    id: user?.id || "",
    username: user?.username || "",
    email: user?.email || "",
    userPhoto: user?.userPhoto || "",
    isThirdPartyAuth: user?.isThirdPartyAuth || false,
    isAdmin: user?.isAdmin || false,
    accessToken: user?.accessToken || "",
    refreshToken: user?.refreshToken || "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserSliceInterface>)=>{
            console.log("User store redux", action)
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.userPhoto = action.payload.userPhoto;
            state.email = action.payload.email; 
            state.isThirdPartyAuth = action.payload.isThirdPartyAuth           
            state.isAdmin = action.payload.isAdmin;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem("user", JSON.stringify(action.payload))
             
        },
        removeUser: (state)=>{
            state.id = "";
            state.username = ""
            state.userPhoto = ""
            state.email = ""
            state.isThirdPartyAuth = false
            state.isAdmin = false;
            state.accessToken = "";
            state.refreshToken = "";
            localStorage.removeItem("user")
            localStorage.removeItem("token")
        },
        changeUsername: (state, {payload: {username}})=>{
            console.log("Changed Username",username)
            state.username = username;
            let user = JSON.parse(localStorage.getItem("user") as "{}")
            user.username = username;
            localStorage.setItem("user", JSON.stringify(user))
        },
        changeEmail: (state, action)=>{
            state.email = action.payload.email;
            let user = JSON.parse(localStorage.getItem("user") as "{}")
            user.email = action.payload.email;
            localStorage.setItem("user", JSON.stringify(user))
        },
        changeProfilePhoto: (state, {payload: {imagePath}})=>{
            state.userPhoto = imagePath;
            let user = JSON.parse(localStorage.getItem("user") as "{}")
            user.userPhoto = imagePath;
            localStorage.setItem("user", JSON.stringify(user))
        }
    }
})

export const {setUser, removeUser, changeUsername, changeEmail, changeProfilePhoto} = userSlice.actions;

export default userSlice.reducer