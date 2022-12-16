import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { deleteFeedback } from "../../../redux/reducers/feedback";
import DeleteModal from "../../../components/DeleteModal/DeleteModal";
import { DeleteModalBtn } from "./DeleteFeedback.styled";
import { deleteFeedback as removeFeedback } from "../../../api/feedback";

type DeleteFeedbackProps = {
  feedbackId: string;
};
const DeleteFeedback = ({ feedbackId }: DeleteFeedbackProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );

  const deleteFeedbackFromStore = () => {
    (async () => {
      try {
        await removeFeedback(feedbackId, accessToken, refreshToken);
        dispatch(deleteFeedback({ feedbackId }));
        navigate("/");
      } catch (err) {}
    })();
  };

  console.log(feedbackId);
  return (
    <>
      <DeleteModal
        isOpen={isOpen}
        onClose={onClose}
        deleteFeedback={deleteFeedbackFromStore}
        text="Feedback"
      />
      <DeleteModalBtn onClick={onOpen}>Delete Feedback</DeleteModalBtn>
    </>
  );
};

export default DeleteFeedback;
