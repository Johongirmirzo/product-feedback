import React from "react";
import CommentItem from "./CommentItem/CommentItem";
import { CommentListBox, CommentListTitle } from "./CommentList.styled";
import { CommentListProps } from "./CommentList.types";

const CommentList = ({
  comments,
  feedbackId,
  commentLength,
}: CommentListProps) => {
  return (
    <CommentListBox>
      <CommentListTitle>
        {commentLength > 1
          ? `${commentLength} Comments`
          : `${commentLength} Comment`}
      </CommentListTitle>
      {comments
        .filter((comment) => comment.feedback === feedbackId)
        .map((comment, index) => (
          <CommentItem key={index} comment={comment} feedbackId={feedbackId} />
        ))}
    </CommentListBox>
  );
};

export default CommentList;
