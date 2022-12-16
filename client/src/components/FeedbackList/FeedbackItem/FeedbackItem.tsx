import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { decode } from "html-entities";
import { IoChevronUpSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { voteFeedback } from "../../../redux/reducers/feedback";
import {
  FeedbackItemBox,
  FeedbackStatusText,
  FeedbacItemFlexContainer,
  FeedbackItemLeft,
  FeedbackItemAmount,
  FeedbackItemTextBox,
  FeedbackItemTitle,
  FeedbackItemDescriptionBox,
  FeedbackItemDescription,
  FeedbackItemToggleDescriptionBtn,
  FeedbackItemCategory,
  FeedbackItemRight,
  FeedbackItemLink,
} from "./FeedbackItem.styled";
import { voteFeedback as updateFeedbackVote } from "../../../api/feedback";
import { FeedbackItemProps } from "./FeedbackItem.types";

const FeedbackItem = ({ feedback, status }: FeedbackItemProps) => {
  const dispatch = useDispatch();
  const comments = useSelector((state: RootState) => state.comment.comments);
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const [description, setDescription] = useState(feedback.description);

  useEffect(() => {
    if (feedback.description.length > 250) {
      setDescription(`${feedback.description.slice(0, 250)}...`);
    }
  }, [feedback.description]);

  const getFeedbackStatusClassName = () => {
    return status === "planned"
      ? "feedback-item--orange active"
      : status === "in-progress"
      ? "feedback-item--purple active"
      : status === "live"
      ? "feedback-item--blue active"
      : "";
  };
  const handleVoteFeedbackClick = (voteType: string) => {
    (async () => {
      try {
        const response = await updateFeedbackVote(
          voteType,
          feedback._id,
          accessToken,
          refreshToken
        );
        dispatch(
          voteFeedback({
            feedback: response.data,
          })
        );
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    })();
  };
  const toggleShowAllText = () => {
    if (description === feedback.description) {
      setDescription(`${feedback.description.slice(0, 250)}...`);
    } else {
      setDescription(feedback.description);
    }
  };

  return (
    <FeedbackItemBox className={getFeedbackStatusClassName()}>
      <FeedbackStatusText className={getFeedbackStatusClassName()}>
        {" "}
        {status === "in-progress"
          ? "In Progress"
          : status === "planned"
          ? "Planned"
          : status === "live"
          ? "Live"
          : ""}
      </FeedbackStatusText>
      <FeedbacItemFlexContainer className={status ? "roadmap-flex" : ""}>
        <FeedbackItemLeft>
          <FeedbackItemAmount className={status ? "active" : ""}>
            <IoChevronUpSharp
              className="feedback-item-icon"
              onClick={handleVoteFeedbackClick.bind(null, "increment")}
            />
            {feedback.voteAmount}
            <BsChevronDown
              className="feedback-item-icon"
              onClick={handleVoteFeedbackClick.bind(null, "decrement")}
            />
          </FeedbackItemAmount>
          <FeedbackItemTextBox>
            <Link to={`/feedback/${feedback._id}`}>
              <FeedbackItemTitle>{decode(feedback.title)}</FeedbackItemTitle>
              <FeedbackItemDescriptionBox>
                <FeedbackItemDescription>
                  {description && decode(description)}
                </FeedbackItemDescription>
              </FeedbackItemDescriptionBox>
            </Link>
            {feedback.description.length > 250 && (
              <FeedbackItemToggleDescriptionBtn onClick={toggleShowAllText}>
                {feedback.description === description
                  ? "Show Less"
                  : "Show More"}
              </FeedbackItemToggleDescriptionBtn>
            )}
            <FeedbackItemCategory>
              {feedback.category.slice(0, 1) +
                feedback.category.slice(1).toLowerCase()}
            </FeedbackItemCategory>
          </FeedbackItemTextBox>
        </FeedbackItemLeft>
        <FeedbackItemRight>
          <FeedbackItemLink>
            <Link to={`/feedback/${feedback._id}`}>
              <FaRegComment />
              <p>
                {
                  comments.filter(
                    (comment) => comment.feedback === feedback._id
                  ).length
                }
              </p>
            </Link>
          </FeedbackItemLink>
        </FeedbackItemRight>
      </FeedbacItemFlexContainer>
    </FeedbackItemBox>
  );
};

export default FeedbackItem;
