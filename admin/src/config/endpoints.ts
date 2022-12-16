const BASE_URL = "https://product-feedback-f9ey.onrender.com/api"
const URL = "https://product-feedback-f9ey.onrender.com/";
const ENDPOINTS = {
    LOGIN_USER: "/auth/admin/login",
    LOGOUT_USER: "/auth/logout",
    CHANGE_USERNAME: "/auth/changeUsername",
    CHANGE_EMAIL: "/auth/changeEmail",
    CHANGE_PASSWORD: "/auth/changePassword",

    GET_ALL_FEEDBACKS: "/feedback",
    CHANGE_FEEDBACK_STATUS: "/feedback/changeStatus"
}

export {ENDPOINTS, BASE_URL, URL}