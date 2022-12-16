export interface CommentInterface {
    replyingTo: string;
    description: string;
    username: string;
    user: string;
    userPhoto: string;
}
export interface FeedbackVoters {
    username: string;
    voteType: string;
    feedback: string;
}
  
export interface FeedbackListInterface {
    _id: string;
    title: string;
    description: string;
    category: string;
    user: string;
    feedbackVoters: FeedbackVoters[]; 
    status: string;
    voteAmount: number;
    comments: CommentInterface[];
}
export type FeedbackListProps = {
    feedbacks: FeedbackListInterface[];
    currentFilterStatus: string;
    isLoading: boolean;
};