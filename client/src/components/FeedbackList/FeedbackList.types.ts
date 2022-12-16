import { FeedbackInterface } from "../../types/feedback";

export type FeedbackListProps = {
    feedbacks: FeedbackInterface[];
    sortBy: string;
    activeCategory: string;
    isLoading: boolean;
  };
  