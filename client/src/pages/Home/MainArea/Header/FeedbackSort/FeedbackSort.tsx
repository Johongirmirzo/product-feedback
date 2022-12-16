import React, { useState } from "react";
import {
  FeedbackSortBox,
  FeedbackSortLabel,
  FeedbackSortSelect,
} from "./FeedbackSort.styled";

type FeedbackSortProps = {
  getSortByValue: (val: string) => void;
};
const FeedbackSort = ({ getSortByValue }: FeedbackSortProps) => {
  const [sortBy, setSortBy] = useState("all");
  const changeSortType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
    getSortByValue(e.target.value);
  };
  return (
    <FeedbackSortBox>
      <FeedbackSortLabel htmlFor="feedbackSort">Sort By</FeedbackSortLabel>
      <FeedbackSortSelect
        onChange={changeSortType}
        id="feedbackSort"
        name="sort"
        value={sortBy}
      >
        <option value="all">All</option>
        <option value="most-upvotes">Most Upvotes</option>
        <option value="least-upvotes">Least Upvotes</option>
      </FeedbackSortSelect>
    </FeedbackSortBox>
  );
};

export default FeedbackSort;
