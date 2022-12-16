import React from "react";

import FeedbackItem from "./FeedbackItem/FeedbackItem";
import {
  FeedbackListTable,
  FeedbackListThead,
  FeedbackListTr,
  FeedbackListTh,
  FeedbackListTbody,
  FeedbackListLoadingTitle,
} from "./FeedbackList.styled";
import { FeedbackListProps } from "./FeedbackList.types";

const FeedbackList = ({
  feedbacks,
  currentFilterStatus,
  isLoading,
}: FeedbackListProps) => {
  const getFeedbackListStatusAmount = (status: string) => {
    return feedbacks.filter((feedback) =>
      status !== "all" ? feedback.status.toLowerCase() === status : true
    );
  };

  return (
    <FeedbackListTable>
      <FeedbackListThead>
        <FeedbackListTr>
          <FeedbackListTh scope="col">No.</FeedbackListTh>
          <FeedbackListTh scope="col">Title</FeedbackListTh>
          <FeedbackListTh scope="col">Description</FeedbackListTh>
          <FeedbackListTh scope="col">Status</FeedbackListTh>
          <FeedbackListTh scope="col">Category</FeedbackListTh>
          <FeedbackListTh scope="col">Vote Amount</FeedbackListTh>
          <FeedbackListTh scope="col">Comment Amount</FeedbackListTh>
          <FeedbackListTh scope="col">Change Status</FeedbackListTh>
        </FeedbackListTr>
      </FeedbackListThead>
      <FeedbackListTbody>
        {isLoading ? (
          <tr>
            <td rowSpan={7} colSpan={10}>
              <h2 style={{ textAlign: "center" }}>Loading...</h2>
            </td>
          </tr>
        ) : getFeedbackListStatusAmount(currentFilterStatus).length > 0 ? (
          getFeedbackListStatusAmount(currentFilterStatus).map(
            (feedback, index) => (
              <FeedbackItem
                key={feedback.title}
                index={index}
                feedback={feedback}
              />
            )
          )
        ) : (
          <tr>
            <td rowSpan={7} colSpan={10}>
              <h2 style={{ textAlign: "center" }}>
                There are not feedbacks{" "}
                {feedbacks.length > 0 ? "with this status" : ""} yet!
              </h2>
            </td>
          </tr>
        )}
      </FeedbackListTbody>
    </FeedbackListTable>
  );
};

export default FeedbackList;
