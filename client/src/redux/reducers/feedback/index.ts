import {createSlice} from "@reduxjs/toolkit"
import {FeedbackInterface} from "../../../types/feedback"


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
        storeFeedback: (state, action)=>{
           state.feedbacks = action.payload;
        },
        createFeedback: (state, action)=>{
           state.feedbacks.unshift(action.payload);
        },
        editFeedback: (state, action)=>{
            state.feedbacks = state.feedbacks.map((feedback) => feedback._id === action.payload._id ? action.payload : feedback)
        },
        deleteFeedback: (state, action)=>{
            state.feedbacks = state.feedbacks.filter((feedback) => feedback._id !== action.payload.feedbackId)
        },
        voteFeedback: (state, {payload: {feedback: votedFeedback}})=>{
            state.feedbacks = state.feedbacks.map(feedback => feedback._id === votedFeedback._id ? votedFeedback : feedback)
        }   
    }
})

export const {storeFeedback, createFeedback, editFeedback, deleteFeedback, voteFeedback} = feedbackSlice.actions
export default feedbackSlice.reducer;