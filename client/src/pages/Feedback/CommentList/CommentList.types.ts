import { CommentData } from "../../../types/comment";
export type CommentListProps = {
    comments: CommentData[];
    feedbackId: string;
    commentLength: number;
};