import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import DeleteFeedback from "./DeleteFeedBack/DeleteFeedback";
import FeedbackItem from "../../components/FeedbackList/FeedbackItem/FeedbackItem";
import CommentList from "./CommentList/CommentList";
import AddComment from "./AddComment/AddComment";
import Loader from "../../components/Loader/Loader";
import {
  FeedbackBox,
  FeedbackHeader,
  FeedbackLink,
  FeedbackBtnsBox,
  FeedbackBtn,
  FeedbackLinkBtn,
} from "./Feedback.styled";
import { FeedbackInterface } from "../../types/feedback";

const Feedback = () => {
  const { feedbackId } = useParams();
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);
  const comments = useSelector((state: RootState) => state.comment.comments);

  const userId = useSelector((state: RootState) => state.user.id);
  const [feedback, setFeedback] = useState({} as FeedbackInterface);

  useEffect(() => {
    const feedback = feedbacks.filter(
      (feedback) => feedback._id === feedbackId
    )[0];
    setFeedback(feedback);
  }, [feedbackId, feedbacks]);

  console.log("Comments", comments, feedbacks, feedbackId);
  return feedbackId && feedback && Object.keys(feedback).length > 0 ? (
    <FeedbackBox>
      <FeedbackHeader>
        <FeedbackLink>
          <Link to="/">
            <BiHome />
            Go Back
          </Link>
        </FeedbackLink>
        {userId === feedback.user && (
          <FeedbackBtnsBox>
            <DeleteFeedback feedbackId={feedbackId} />
            <FeedbackLinkBtn to={`/editFeedback/${feedback._id}`}>
              <FeedbackBtn>Edit Feedback</FeedbackBtn>
            </FeedbackLinkBtn>
          </FeedbackBtnsBox>
        )}
      </FeedbackHeader>
      <FeedbackItem feedback={feedback} />
      <CommentList
        comments={comments}
        commentLength={
          comments.filter((comment) => comment.feedback === feedbackId).length
        }
        feedbackId={feedback._id}
      />
      <AddComment feedbackId={feedbackId} />
    </FeedbackBox>
  ) : (
    <Loader />
  );
};

export default Feedback;
