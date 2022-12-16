import styled from "styled-components";
import { Link } from "react-router-dom";

const FeedbackBox = styled.div`
  margin: 50px auto;
  max-width: 760px;
  width: 90%;
`;
const FeedbackHeader = styled.header`
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;
const FeedbackLink = styled.div`
  & > * {
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    font-weight: 600;
    color: #444;
  }
`;
const FeedbackBtnsBox = styled.div``;
const FeedbackLinkBtn = styled(Link)``;
const Button = styled.button`
  border-radius: 10px;
  border: 0;
  padding: 10px 15px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  z-index: 9999;
  @media (min-width: 768px) {
    padding: 14px 20px;
  }
`;
const FeedbackBtn = styled(Button)`
  background: hsl(234, 86%, 60%);
`;

export {
  FeedbackBox,
  FeedbackHeader,
  FeedbackLink,
  FeedbackBtnsBox,
  FeedbackBtn,
  FeedbackLinkBtn,
};
