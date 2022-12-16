import {createSlice} from "@reduxjs/toolkit"


export interface FeedbackComment {
    _id: string;
    replyingTo: string;
    description: string;
    username: string;
    user: string;
    userPhoto: string;
}
export interface FeedbackVoter {
    username: string;
    voteType: string;
    feedback: string;
}
export interface FeedbackInterface {
    _id: string;
    title: string;
    description: string;
    status: string;
    category: string;
    user: string;
    voteAmount: number;
    feedbackVoters: FeedbackVoter[]
    comments: FeedbackComment[]
}
export interface FeedbackInterfaceList {
    feedbacks: FeedbackInterface[]
}

const initialState: FeedbackInterfaceList = {
    feedbacks: []
}


export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        storeFeedback: (state, action) =>{
            state.feedbacks = action.payload;
         },
        changeFeedbackStatus: (state, {payload: {feedbackId, status}})=>{
            state.feedbacks = state.feedbacks.map(feedback => feedback._id === feedbackId ? {...feedback, status} : feedback)
        }
    }
})

export const {storeFeedback, changeFeedbackStatus} = feedbackSlice.actions
export default feedbackSlice.reducer;