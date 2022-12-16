export interface CommentData {
    _id: string;
    replyingTo: string;
    description: string;
    username: string;
    userPhoto: string;
    isCommentedUserAdmin: boolean;
    user: string;
    feedback: string;
}