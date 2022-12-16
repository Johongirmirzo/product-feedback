import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { decode } from "html-entities";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../../../redux/store";
import { changeFeedbackStatus as updateFeedbackStatus } from "../../../../../../redux/reducers/feedback";
import { FeedbackListTr, FeedbackListTd } from "../FeedbackList.styled";
import {
  FeedbackItemBtn,
  FeedbackItemList,
  FeedbackItemListItem,
} from "./FeedbackItem.styled";
import { changeFeedbackStatus } from "../../../../../../api/feedback";
import { FeedbackListInterface } from "../FeedbackList.types";

type FeedbackItemProps = {
  feedback: FeedbackListInterface;
  index: number;
};

const FeedbackItem = ({ feedback, index }: FeedbackItemProps) => {
  const dispatch = useDispatch();
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (isTooltipOpen) {
        setIsTooltipOpen(false);
      }
    };
    document.body.addEventListener("click", closeMenu);
    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [isTooltipOpen]);

  const openTooltip = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsTooltipOpen(!isTooltipOpen);
  };
  const changeStatus = (e: React.MouseEvent<HTMLLIElement>) => {
    const element = e.target as HTMLLIElement;
    if (element.textContent !== feedback.status) {
      (async () => {
        try {
          const response = await changeFeedbackStatus(
            feedback._id,
            element.innerHTML,
            accessToken,
            refreshToken
          );
          console.log(element.textContent);
          console.log("Change Status", response);
          dispatch(
            updateFeedbackStatus({
              feedbackId: feedback._id,
              status: element.textContent,
            })
          );
        } catch (err) {
          console.error(err);
        }
      })();
    }
  };

  return (
    <FeedbackListTr>
      <FeedbackListTd>{index + 1}</FeedbackListTd>
      <FeedbackListTd title={decode(feedback.title)}>
        {feedback.title.length > 40
          ? `${feedback.title.slice(0, 40)}...`
          : feedback.title}
      </FeedbackListTd>
      <FeedbackListTd title={feedback.description}>
        {feedback.description.length > 40
          ? `${decode(feedback.description.slice(0, 40))}...`
          : decode(feedback.description)}
      </FeedbackListTd>
      <FeedbackListTd>{feedback.status}</FeedbackListTd>
      <FeedbackListTd>{feedback.category}</FeedbackListTd>
      <FeedbackListTd>{feedback.voteAmount}</FeedbackListTd>
      <FeedbackListTd>{feedback.comments.length}</FeedbackListTd>
      <FeedbackListTd>
        <FeedbackItemBtn className={isTooltipOpen ? "active tooltip" : ""}>
          <div onClick={openTooltip}>
            <BsThreeDotsVertical />
          </div>
          <FeedbackItemList onClick={changeStatus}>
            <FeedbackItemListItem
              style={
                feedback.status === "PLANNED"
                  ? {
                      opacity: ".5",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              PLANNED
            </FeedbackItemListItem>
            <FeedbackItemListItem
              style={
                feedback.status === "IN-PROGRESS"
                  ? {
                      opacity: ".5",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              IN-PROGRESS
            </FeedbackItemListItem>
            <FeedbackItemListItem
              style={
                feedback.status === "LIVE"
                  ? {
                      opacity: ".5",
                      cursor: "not-allowed",
                    }
                  : {}
              }
            >
              LIVE
            </FeedbackItemListItem>
          </FeedbackItemList>
        </FeedbackItemBtn>
      </FeedbackListTd>
    </FeedbackListTr>
  );
};

export default FeedbackItem;
