import {createSlice} from "@reduxjs/toolkit"
import {CommentData} from "../../../types/comment"

 
export interface CommentInterface {
    comments: CommentData[]
}

const initialState: CommentInterface = {
    comments: []
}

export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        storeComments: (state, {payload: {comments}}) =>{
            console.log(comments)
            state.comments = comments;
        },
        createComment: (state, {payload: {newComment}}) =>{
            console.log("Create Comment",newComment )
            state.comments.push(newComment)
        },
        editComment: (state, {payload: {commentId, editedComment}}) =>{            
            console.log("Edit Comment", commentId, editedComment)
            state.comments = state.comments.map(comment => comment._id === commentId ? editedComment : comment)
        },
        deleteComment: (state, {payload: {commentId}}) =>{
            console.log("Delete Comment", commentId)
            state.comments = state.comments.filter(comment => comment._id !== commentId);
        },
        changeCommentUsername: (state, {payload: {newUsername, originalUsername}})=>{
            console.log("Change Comment Username", {newUsername, originalUsername})
            state.comments = state.comments.map((comment) => {
                if(comment.username === originalUsername) {
                    comment.username = newUsername;
                    return comment;
                }
                if (comment.replyingTo.trim() === originalUsername.trim()){
                    comment.replyingTo = newUsername;
                    return comment;
                }
                return comment;
            })
        },
        changeCommentPhoto: (state, {payload: {userId, imagePath}})=>{
            console.log("Change Comment Photo", {userId, imagePath})
            state.comments = state.comments.map(comment =>{
                if(comment.user === userId) {
                    comment.userPhoto = imagePath;
                    return comment;
                }
                return comment;
            })
        },
    }
})

export const {storeComments, createComment, editComment, deleteComment, changeCommentUsername, changeCommentPhoto} = commentSlice.actions
export default commentSlice.reducer;