const BASE_URL = "https://product-feedback-ijkr.onrender.com/api"
const URL = "https://product-feedback-ijkr.onrender.com/";

const ENDPOINTS = {
    REGISTER_USER: "/auth/register",
    LOGIN_USER: "/auth/login",
    LOGOUT_USER: "/auth/logout",
    CHANGE_USERNAME: "/auth/changeUsername",
    CHANGE_EMAIL: "/auth/changeEmail",
    CHANGE_PASSWORD: "/auth/changePassword",
    CHANGE_PROFILE_PICTURE: "/auth/changeProfilePicture",
    DELETE_ACCOUNT: "/auth/deleteAccount",

    GET_ALL_FEEDBACKS: "/feedback",
    GET_FEEDBACK: "/feedback",
    CREATE_FEEDBACK: "/feedback/createFeedback",
    EDIT_FEEDBACK: "/feedback",
    DELETE_FEEDBACK: "/feedback",

    GET_ALL_COMMENTS: "/comment",
    CREATE_COMMENT: "/comment/createComment",
    EDIT_COMMENT: "/editComment",
    DELETE_COMMENT: "/deleteComment",

    VOTE_FEEDBACK: "/feedback/voteFeedback",


    GOOGLE_AUTH_URL: `${BASE_URL}/auth/google`,
    LINKEDIN_AUTH_URL: `${BASE_URL}/auth/linkedin`,
    FACEBOOK_AUTH_URL: `${BASE_URL}/auth/facebook`,
}

export {ENDPOINTS, BASE_URL, URL}