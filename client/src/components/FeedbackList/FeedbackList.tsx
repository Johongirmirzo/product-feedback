import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import { FeedbackListText } from "./FeedbackList.styled";
import { FeedbackListProps } from "./FeedbackList.types";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const FeedbackList = ({
  feedbacks,
  sortBy,
  activeCategory,
  isLoading,
}: FeedbackListProps) => {
  const getSelectedCategories = (activeCategory: string) => {
    return feedbacks.filter((feedback) =>
      activeCategory === "all"
        ? true
        : feedback.category.toLowerCase() === activeCategory
    );
  };

  return (
    <>
      {isLoading ? (
        Array(10)
          .fill("")
          .map((el, index) => (
            <Box
              key={index}
              borderRadius="5px"
              mt="7"
              height="180px"
              padding="6"
              boxShadow="lg"
              bg="white"
            >
              <Box display="flex" gap="5">
                <SkeletonCircle size="10" />
                <Box flex="1">
                  <SkeletonText mt="4" noOfLines={4} spacing="4" />
                  <Skeleton mt="3" width="100px" height="25px" />
                </Box>
              </Box>
            </Box>
          ))
      ) : feedbacks.length === 0 ? (
        <FeedbackListText>There are not feedbacks yet!</FeedbackListText>
      ) : getSelectedCategories(activeCategory).length < 1 ? (
        <FeedbackListText>
          There aren't feedbacks on this category yet!
        </FeedbackListText>
      ) : (
        getSelectedCategories(activeCategory)
          .sort((a, b) =>
            sortBy === "all"
              ? a.voteAmount - b.voteAmount
              : sortBy === "most-upvotes"
              ? b.voteAmount - a.voteAmount
              : a.voteAmount - b.voteAmount
          )
          .map((feedback, index) => (
            <FeedbackItem key={feedback._id} feedback={feedback} />
          ))
      )}
    </>
  );
};

export default FeedbackList;
