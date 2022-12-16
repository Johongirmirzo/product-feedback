import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import Pagintation from "../../../components/Pagination/Pagination";
import Header from "./Header/Header";
import FeedbackList from "../../../components/FeedbackList/FeedbackList";
import { FeedbackInterface } from "../../../types/feedback";

type MainAreaProps = {
  activeCategory: string;
  isLoading: boolean;
};

const MainArea = ({ activeCategory, isLoading }: MainAreaProps) => {
  const [sortBy, setSortBy] = useState("all");
  const feedbacks: FeedbackInterface[] = useSelector(
    (state: RootState) => state.feedback.feedbacks
  );

  const [paginatedFeedbacks, setPaginatedFeedbacks] = useState<
    FeedbackInterface[]
  >([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    if (feedbacks) {
      const endOffset = itemOffset + itemsPerPage;
      console.log(feedbacks);
      setPaginatedFeedbacks(feedbacks.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(feedbacks.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, feedbacks]);

  const handlePageClick = (event: { selected: number }) => {
    console.log(event, "Event");
    const newOffset = (event.selected * itemsPerPage) % feedbacks.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const getSortByValue = (val: string) => setSortBy(val);

  console.log(feedbacks);
  return (
    <div>
      <Header
        totalFeedbacks={feedbacks.length}
        getSortByValue={getSortByValue}
      />
      <FeedbackList
        feedbacks={paginatedFeedbacks}
        sortBy={sortBy}
        activeCategory={activeCategory}
        isLoading={isLoading}
      />
      <Pagintation pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
};

export default MainArea;
