import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import { createComment as storeComment } from "../../../redux/reducers/comment";
import {
  AddCommentBox,
  AddCommentTitle,
  AddCommentTextArea,
  AddCommentBtn,
  AddCommentFieldErrorText,
} from "./AddComment.styled";
import { createComment } from "../../../api/comment";

type AddCommentProps = {
  feedbackId: string;
};
const AddComment = ({ feedbackId }: AddCommentProps) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
    if (comment.trim().length > 10 && comment.trim().length < 250) {
      setError("");
    } else if (comment.trim().length < 10) {
      setError("Minimum allowed comment length is 10");
    } else if (comment.trim().length > 250) {
      setError("Maximum allowed comment length is 250");
    } else {
    }
  };
  const handlePostCommentClick = () => {
    if (comment.trim().length > 10 && comment.trim().length < 250) {
      (async () => {
        const commentData = {
          description: comment,
          username: user.username,
          user: user.id,
          feedback: feedbackId,
          userPhoto: user.userPhoto ? user.userPhoto : "",
          isCommentedUserAdmin: user.isAdmin,
        };
        try {
          setIsLoading(true);
          const response = await createComment(
            commentData,
            feedbackId,
            user.accessToken,
            user.refreshToken
          );
          setIsLoading(false);
          dispatch(storeComment({ newComment: response.data.comment }));
          setComment("");
        } catch (err) {
          console.error(err);
        }
      })();
    } else if (comment.trim().length < 10) {
      setError("Minimum allowed comment length is 10");
    } else if (comment.trim().length > 250) {
      setError("Maximum allowed comment length is 250");
    }
  };

  console.log(user);
  return (
    <AddCommentBox>
      <AddCommentTitle>Add Comment</AddCommentTitle>
      <AddCommentTextArea
        name="comment"
        placeholder="Type your comment here"
        onChange={handleCommentChange}
        value={comment}
      ></AddCommentTextArea>
      <AddCommentFieldErrorText>{error}</AddCommentFieldErrorText>
      <AddCommentBtn
        onClick={handlePostCommentClick}
        disabled={isLoading ? true : false}
        isLoading={isLoading ? true : false}
      >
        {isLoading ? "Posting Comment..." : "Post Comment"}
      </AddCommentBtn>
    </AddCommentBox>
  );
};

export default AddComment;
