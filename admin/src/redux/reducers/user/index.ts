import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserSliceInterface {
    id: string;
    username: string;
    email: string;
    isThirdPartyAuth: boolean;
    accessToken: string;
    refreshToken: string;
}
const user = JSON.parse(localStorage.getItem("admin") as "{}")

const initialState: UserSliceInterface = {
    id: user?.id || "",
    username: user?.username || "",
    email: user?.email || "",
    isThirdPartyAuth: user?.isThirdPartyAuth || false,
    accessToken: user?.accessToken || "",
    refreshToken: user?.refreshToken || ""
}

export const userSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserSliceInterface>)=>{
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.email = action.payload.email; 
            state.isThirdPartyAuth = action.payload.isThirdPartyAuth           
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            localStorage.setItem("admin", JSON.stringify(action.payload))
             
        },
        removeUser: (state)=>{
            state.id = "";
            state.username = ""
            state.email = ""
            state.isThirdPartyAuth = false
            state.accessToken = ""
            state.refreshToken = ""
            localStorage.removeItem("admin")
            localStorage.removeItem("token")
        },
        changeUsername: (state, {payload: {username}})=>{
            console.log("Changed Username",username)
            state.username = username;
            let user = JSON.parse(localStorage.getItem("admin") as "{}")
            user.username = username;
            localStorage.setItem("admin", JSON.stringify(user))
        },
        changeEmail: (state, action)=>{
            state.email = action.payload.email;
            let user = JSON.parse(localStorage.getItem("admin") as "{}")
            user.email = action.payload.email;
            localStorage.setItem("admin", JSON.stringify(user))
        },
    }
})

export const {setUser, removeUser, changeUsername, changeEmail} = userSlice.actions;

export default userSlice.reducer