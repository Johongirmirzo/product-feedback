import styled from "styled-components";

const FeedbackSortBox = styled.div`
  margin-left: 30px;
`;
const FeedbackSortLabel = styled.label`
  color: #bdbdbd;
  margin-right: 10px;
`;
const FeedbackSortSelect = styled.select`
  padding: 1px 5px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  outline: transparent;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  & > * {
    background: #222;
  }
`;

export { FeedbackSortBox, FeedbackSortLabel, FeedbackSortSelect };
