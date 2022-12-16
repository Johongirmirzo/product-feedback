import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./reducers/user"
import feedbackReducer from "./reducers/feedback"
import commentReducer from "./reducers/comment"

export const store = configureStore({
    reducer: {
        user: userReducer,
        feedback: feedbackReducer,
        comment: commentReducer
    },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch