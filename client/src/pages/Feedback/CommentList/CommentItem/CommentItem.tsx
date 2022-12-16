import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import { decode } from "html-entities";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import EditCommentForm from "../EditCommentForm/EditCommentForm";
import ReplyCommentForm from "../ReplyCommentForm/ReplyCommentForm";
import DeleteComment from "../DeleteCommet/DeleteComment";
import {
  CommentItemBox,
  CommentUserPhoto,
  CommentPhotoCircle,
  CommentTextBox,
  CommentUsername,
  CommentDescription,
  CommentReplyingTo,
  CommentActions,
  CommentReplyBtn,
  CommentToolTip,
  CommentToolTipBtns,
  CommentToolTipBtn,
  CommentToolTipActionBtn,
  CommentAdminBox,
  CommentAdminText,
  CommentAdminIcon,
} from "./CommentItem.styled";
import { URL } from "../../../../config/endpoints";
import { CommentData } from "../../../../types/comment";

type CommentItemProps = {
  comment: CommentData;
  feedbackId: string;
};
const CommentItem = ({ comment, feedbackId }: CommentItemProps) => {
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [isReplyFormOpen, setIsReplyFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeStatus, setActiveStatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const updateScreenSize = (e: any) => {
      if (e.target.innerWidth <= 562) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
        setActiveStatus("");
      }
    };
    if (window.innerWidth <= 562) {
      setIsSmallScreen(true);
    }

    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  useEffect(() => {
    const closeMenu = () => {
      if (isToolTipOpen) {
        setIsToolTipOpen(false);
      }
    };
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [isToolTipOpen]);

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsToolTipOpen(!isToolTipOpen);
  };
  const openReplyForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsReplyFormOpen(true);
  };
  const openEditForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditFormOpen(true);
  };

  const closeReplyForm = () => setIsReplyFormOpen(false);
  const closeEditForm = () => setIsEditFormOpen(false);

  return (
    <CommentItemBox
      className={isSmallScreen ? "small-screen comment-item" : "comment-item"}
    >
      {user && (
        <DeleteComment
          isOpen={isOpen}
          onClose={onClose}
          feedbackId={feedbackId}
          commentId={comment.user === user.id ? comment._id : ""}
          text="Comment"
        />
      )}

      {comment.userPhoto ? (
        <CommentUserPhoto src={comment.userPhoto} />
      ) : (
        <CommentPhotoCircle>{comment.username.slice(0, 1)}</CommentPhotoCircle>
      )}
      <CommentTextBox>
        <CommentUsername>
          {comment.username}
          {comment.isCommentedUserAdmin && (
            <CommentAdminBox>
              <CommentAdminText>admin</CommentAdminText>
              <CommentAdminIcon />
            </CommentAdminBox>
          )}
        </CommentUsername>
        <CommentDescription>
          {comment.replyingTo && (
            <CommentReplyingTo>
              Replying to: @{comment.replyingTo}
            </CommentReplyingTo>
          )}
          {decode(comment.description)}
        </CommentDescription>
        <CommentActions>
          {/* <CommentLikeBtn>
            <BsHeart /> like
          </CommentLikeBtn> */}
          {user.id !== comment.user && (
            <CommentReplyBtn onClick={openReplyForm}>
              <AiOutlineMessage /> Reply
            </CommentReplyBtn>
          )}
        </CommentActions>
        {comment.user === user.id && (
          <CommentToolTip>
            <CommentToolTipBtn onClick={openMenu}>
              <BsThreeDots />
            </CommentToolTipBtn>
            <CommentToolTipBtns className={isToolTipOpen ? "active" : ""}>
              <CommentToolTipActionBtn onClick={openEditForm}>
                Edit
              </CommentToolTipActionBtn>
              <CommentToolTipActionBtn onClick={onOpen}>
                Delete
              </CommentToolTipActionBtn>
            </CommentToolTipBtns>
          </CommentToolTip>
        )}
        {isReplyFormOpen && (
          <ReplyCommentForm
            closeReplyForm={closeReplyForm}
            feedbackId={feedbackId}
            userId={user.id}
            userPhoto={user.userPhoto}
            replyingTo={comment.user !== user.id ? comment.username : ""}
            username={user.username}
            isAdmin={user.isAdmin}
          />
        )}
        {isEditFormOpen && (
          <EditCommentForm
            closeEditForm={closeEditForm}
            feedbackId={feedbackId}
            commentId={comment.user === user.id ? comment._id : ""}
            comment={comment.user === user.id ? comment.description : ""}
          />
        )}
      </CommentTextBox>
    </CommentItemBox>
  );
};

export default CommentItem;
