import styled from "styled-components";

const FeedbackItemBtn = styled.button`
  position: relative;
  display: block;
  margin: 0 auto;
  border: 0;
  background: transparent;
  font-size: 20px;
  cursor: pointer;

  &.active ul {
    opacity: 1;
    visibility: visible;
  }
`;
const FeedbackItemList = styled.ul`
  position: absolute;
  top: 0;
  right: 20px;
  width: 200px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
`;
const FeedbackItemListItem = styled.li`
  padding: 10px 0;
  list-style-type: none;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: #e7e7e7;
  }
`;

export { FeedbackItemBtn, FeedbackItemList, FeedbackItemListItem };
