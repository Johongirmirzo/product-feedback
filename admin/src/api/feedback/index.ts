import {API} from "../index"
import {ENDPOINTS} from "../../config/endpoints";

 
const getAllFeedbacks = async (accessToken: string, refreshToken: string)=>{
    return await API.get(ENDPOINTS.GET_ALL_FEEDBACKS, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
const changeFeedbackStatus = async (feedbackId: string, status: string, accessToken: string, refreshToken: string) => {
    return await API.post(`${ENDPOINTS.CHANGE_FEEDBACK_STATUS}/${feedbackId}`, {status}, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
            Refreshtoken: `Bearer ${refreshToken}`
        }
    })
}
export {
    getAllFeedbacks,
    changeFeedbackStatus
}