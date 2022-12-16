import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { deleteComment as removeComment } from "../../../../redux/reducers/comment";
import DeleteModal from "../../../../components/DeleteModal/DeleteModal";
import { deleteComment } from "../../../../api/comment";

type DeleteCommentProps = {
  onClose: () => void;
  isOpen: boolean;
  text: string;
  feedbackId: string;
  commentId: string;
};
const DeleteComment = ({
  onClose,
  isOpen,
  text,
  feedbackId,
  commentId,
}: DeleteCommentProps) => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );

  const deleteCommentFromStore = () => {
    (async () => {
      try {
        await deleteComment(feedbackId, commentId, accessToken, refreshToken);
        dispatch(removeComment({ commentId }));
      } catch (err) {
        console.error(err);
      }
    })();
  };
  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        text={text}
        deleteCommentFromStore={deleteCommentFromStore}
      />
    </>
  );
};

export default DeleteComment;
