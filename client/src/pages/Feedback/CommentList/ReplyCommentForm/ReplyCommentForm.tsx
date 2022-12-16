import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { createComment as storeComment } from "../../../../redux/reducers/comment";
import {
  ReplyFormBox,
  ReplyFormTitle,
  ReplyFormTextArea,
  ReplyFormError,
  ReplyFormSubmitBtn,
  ReplyFormCancelBtn,
} from "./ReplyCommentForm.styled";
import { createComment } from "../../../../api/comment";

type ReplyCommentFormProps = {
  closeReplyForm: () => void;
  feedbackId: string;
  replyingTo: string;
  username: string;
  userId: string;
  isAdmin: boolean;
  userPhoto: string;
};
const ReplyCommentForm = ({
  closeReplyForm,
  feedbackId,
  replyingTo,
  username,
  userId,
  isAdmin,
  userPhoto,
}: ReplyCommentFormProps) => {
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );

  const updateReply = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (reply.trim().length > 250) {
      setError("Maximum allowed reply length is 250");
    } else if (reply.trim().length < 10) {
      setError("Minimum allowed reply length is 10");
    } else {
      if ((reply.trim().length > 10 || reply.trim().length < 250) && error) {
        setError("");
      }
    }
    setReply(e.target.value);
  };
  const submitReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (reply.trim().length < 10) {
      setError("Minimum allowed reply length is 10");
    } else if (reply.trim().length > 250) {
      setError("Maximum allowed reply length is 250");
    } else {
      (async () => {
        const commentData = {
          description: reply,
          username,
          user: userId,
          replyingTo,
          userPhoto,
          isCommentedUserAdmin: isAdmin,
        };
        try {
          const response = await createComment(
            commentData,
            feedbackId,
            accessToken,
            refreshToken
          );
          dispatch(storeComment({ newComment: response.data.comment }));
          setReply("");
        } catch (err) {
          console.error(err);
        }
      })();
      closeReplyForm();
      setReply("");
    }
  };

  console.log("Reply Form", username);
  return (
    <ReplyFormBox>
      <ReplyFormTitle>Replying To: {replyingTo}</ReplyFormTitle>
      <ReplyFormTextArea
        onChange={updateReply}
        value={reply}
        placeholder="Enter Your Reply"
      ></ReplyFormTextArea>
      {error && <ReplyFormError>{error}</ReplyFormError>}
      <ReplyFormSubmitBtn onClick={submitReply}>Reply</ReplyFormSubmitBtn>
      <ReplyFormCancelBtn onClick={closeReplyForm}>Cancel</ReplyFormCancelBtn>
    </ReplyFormBox>
  );
};

export default ReplyCommentForm;
