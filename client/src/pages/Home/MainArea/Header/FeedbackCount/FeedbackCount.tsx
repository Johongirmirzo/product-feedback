import React from "react";
import { FeedbackCountText } from "./FeedbackCount.styled";

type FeedbackCountProps = {
  feedbackCount: number;
};
const FeedbackCount = ({ feedbackCount }: FeedbackCountProps) => {
  return (
    <FeedbackCountText>
      {feedbackCount > 1
        ? `${feedbackCount} Suggestions`
        : `${feedbackCount} Suggestion`}
    </FeedbackCountText>
  );
};

export default FeedbackCount;
