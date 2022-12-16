import React from "react";
import { Link } from "react-router-dom";
import FeedbackCount from "./FeedbackCount/FeedbackCount";
import FeedbackSort from "./FeedbackSort/FeedbackSort";
import {
  HeaderBox,
  HeaderLeft,
  HeaderRight,
  HeaderLink,
  HeaderBtn,
} from "./Header.styled";
import { HeaderProps } from "./Header.types";
const Header = ({ totalFeedbacks, getSortByValue }: HeaderProps) => {
  return (
    <HeaderBox>
      <HeaderLeft>
        <FeedbackCount feedbackCount={totalFeedbacks} />
        <FeedbackSort getSortByValue={getSortByValue} />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLink to="/addFeedback">
          <HeaderBtn>+ Add Feedback</HeaderBtn>
        </HeaderLink>
      </HeaderRight>
    </HeaderBox>
  );
};

export default Header;
