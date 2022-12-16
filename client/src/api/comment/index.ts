import {ENDPOINTS} from "../../config/endpoints"
import {API} from "../index"
import decode from "jwt-decode"

interface CommentData {
    description: string;
    username: string;
    user: string;
    userPhoto: string;
    replyingTo?: string;
}


 
const getAllComments = async (accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.get(ENDPOINTS.GET_ALL_COMMENTS, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Beare ${refreshToken}`
        }
    });
}
const createComment = async (commentData: CommentData, feedbackId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.post(`${ENDPOINTS.CREATE_COMMENT}/${feedbackId}`, commentData, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Beare ${refreshToken}`
        }
    })
}
const editComment = async (description: string, feedbackId: string, commentId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.put(`/comment/${feedbackId}${ENDPOINTS.EDIT_COMMENT}/${commentId}`, {description}, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Beare ${refreshToken}`
        }
    })
}
const deleteComment = async (feedbackId: string, commentId: string, accessToken: string, refreshToken: string)=>{
    console.log("Accesstoken decode:", decode(accessToken))
    console.log("Refreshtoken decode:", decode(refreshToken)) 
    return await API.delete(`/comment/${feedbackId}${ENDPOINTS.DELETE_COMMENT}/${commentId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            RefreshToken: `Beare ${refreshToken}`
        }
    })
}

export {
    getAllComments,
    createComment,
    editComment,
    deleteComment
}
