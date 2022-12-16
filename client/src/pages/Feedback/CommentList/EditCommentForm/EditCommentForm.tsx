import React, { useState } from "react";
import { decode } from "html-entities";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { editComment as updateComment } from "../../../../redux/reducers/comment";
import {
  EditCommentFormBox,
  EditCommentFormTitle,
  EditCommentFormTextArea,
  EditCommentFormError,
  EditCommentFormSubmitBtn,
  EditCommentFormCancelBtn,
} from "./EditCommentForm.styled";
import { editComment } from "../../../../api/comment";
import { EditCommentFormProps } from "./EditCommentForm.types";

const EditCommentForm = ({
  closeEditForm,
  comment: userComment,
  feedbackId,
  commentId,
}: EditCommentFormProps) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(decode(userComment));
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (comment.trim().length > 250) {
      setError("Maximum allowed comment length is 250");
    } else if (comment.trim().length < 10) {
      setError("Minimum allowed comment length is 10");
    } else {
      if (
        (comment.trim().length > 10 || comment.trim().length < 250) &&
        error
      ) {
        setError("");
      }
    }
    setComment(e.target.value);
  };
  const submitComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (comment.trim().length < 10) {
      setError("Minimum allowed comment length is 10");
    } else if (comment.trim().length > 250) {
      setError("Maximum allowed comment length is 250");
    } else {
      (async () => {
        try {
          setIsLoading(true);
          const response = await editComment(
            comment,
            feedbackId,
            commentId,
            accessToken,
            refreshToken
          );
          setIsLoading(false);

          console.log(response);
          dispatch(
            updateComment({
              editedComment: response.data.comment,
              commentId,
            })
          );
          setComment("");
          closeEditForm();
        } catch (err) {
          console.error(err);
        }
      })();
    }
  };

  return (
    <EditCommentFormBox>
      <EditCommentFormTitle>Edit Comment</EditCommentFormTitle>
      <EditCommentFormTextArea
        onChange={handleUpdateCommentChange}
        value={comment}
        placeholder="Edit Comment"
      ></EditCommentFormTextArea>
      {error && <EditCommentFormError>{error}</EditCommentFormError>}
      <EditCommentFormSubmitBtn
        onClick={submitComment}
        disabled={isLoading ? true : false}
        isLoading={isLoading ? true : false}
      >
        {isLoading ? "Editing Comment..." : "Edit Comment"}
      </EditCommentFormSubmitBtn>
      <EditCommentFormCancelBtn onClick={closeEditForm}>
        Cancel
      </EditCommentFormCancelBtn>
    </EditCommentFormBox>
  );
};

export default EditCommentForm;
