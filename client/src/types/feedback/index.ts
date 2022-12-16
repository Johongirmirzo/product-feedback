export interface FeedbackComment {
    _id: string;
    userId: string;
    commentId: string;
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