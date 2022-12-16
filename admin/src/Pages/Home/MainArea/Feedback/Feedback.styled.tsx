import styled from "styled-components";

const FeedbackBox = styled.section`
  flex: 1;
  align-self: flex-start;
  margin: 20px 0 50px 0;
  overflow-x: scroll;
`;
const FeedbackHeader = styled.header``;
const FeedbackTitle = styled.h1`
  margin-bottom: 50px;
  font-size: clamp(2rem, calc(2vw + 1rem), 2.5rem);
  font-weight: 600;
  color: #222;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export { FeedbackBox, FeedbackHeader, FeedbackTitle };
