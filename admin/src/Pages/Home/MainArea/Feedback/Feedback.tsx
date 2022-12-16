import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import Pagination from "../../../../components/Padination/Pagination";
import FeedbackList from "./FeedbackList/FeedbackList";
import FeedbackStatusFilter from "./FilterFeedbackStatus/FilterFeedbackStatus";
import { FeedbackInterface } from "../../../../redux/reducers/feedback";
import { FeedbackBox, FeedbackHeader, FeedbackTitle } from "./Feedback.styled";

const Feedback = () => {
  const feedbacks: FeedbackInterface[] = useSelector(
    (state: RootState) => state.feedbacks.feedbacks
  );
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all");
  const [paginatedSleepEntries, setPaginatedSleepEntries] = useState<
    FeedbackInterface[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isLoading] = useOutletContext<[isLoading: boolean]>();

  useEffect(() => {
    if (feedbacks) {
      const endOffset = itemOffset + itemsPerPage;
      console.log(feedbacks);
      setPaginatedSleepEntries(feedbacks.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(feedbacks.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, feedbacks]);

  const getCurrentFilterStatus = (status: string) => {
    setCurrentFilterStatus(status);
  };
  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % feedbacks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <FeedbackBox>
      <FeedbackHeader>
        <FeedbackTitle>Feedbacks</FeedbackTitle>
        <FeedbackStatusFilter getCurrentFilterStatus={getCurrentFilterStatus} />
      </FeedbackHeader>
      <FeedbackList
        feedbacks={paginatedSleepEntries}
        currentFilterStatus={currentFilterStatus}
        isLoading={isLoading}
      />
      <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
    </FeedbackBox>
  );
};

export default Feedback;
