import {API} from "../index"
import {ENDPOINTS} from "../../config/endpoints";
import decode from "jwt-decode"
import {useSelector} from "react-redux";
import type {RootState} from "../../redux/store";

interface FeedbackData {
    title: string;
    description: string;
    category: string;
    user?: string;
}
interface CommentData {
    description: string;
    username: string;
    user: string;
    userPhoto: string;
    replyingTo?: string;
}



const getAllFeedbacks = async (accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken));
    console.log("Refreshtoken decode:", decode(refreshToken));
    return await API.get(ENDPOINTS.GET_ALL_FEEDBACKS, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
const createFeedback = async (feedbackData: FeedbackData, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken));
    console.log("Refreshtoken decode:", decode(refreshToken));
    return await API.post(ENDPOINTS.CREATE_FEEDBACK, feedbackData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}
const editFeedback = async (feedbackData: FeedbackData, feedbackId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken));
    console.log("Refreshtoken decode:", decode(refreshToken));
    return await API.put(`${ENDPOINTS.EDIT_FEEDBACK}/${feedbackId}`, feedbackData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}
const deleteFeedback = async (feedbackId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken));
    console.log("Refreshtoken decode:", decode(refreshToken));
    return await API.delete(`${ENDPOINTS.DELETE_FEEDBACK}/${feedbackId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}
const voteFeedback = async (voteType: string, feedbackId: string, accessToken: string, refreshToken: string)=> {
    console.log("Accesstoken decode:", decode(accessToken));
    console.log("Refreshtoken decode:", decode(refreshToken));
    return await API.post(`${ENDPOINTS.VOTE_FEEDBACK}/${feedbackId}`, {voteType}, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Bearer ${refreshToken}`
        }
    })
}
export {
    getAllFeedbacks,
    createFeedback,
    editFeedback,
    deleteFeedback,
    voteFeedback
}