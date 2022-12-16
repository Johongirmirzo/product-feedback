import styled from "styled-components";

const FeedbackItemBox = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  padding: 25px 30px;
  background: #f7f7f7;
  &.feedback-item--orange {
    border-top: 10px solid orange;
  }
  &.feedback-item--purple {
    border-top: 10px solid purple;
  }
  &.feedback-item--blue {
    border-top: 10px solid #00b3ff;
  }
`;
const FeedbackStatusText = styled.p`
  position: relative;
  margin-bottom: 20px;
  margin-left: 20px;
  font-weight: 500;
  color: #444;
  &::before {
      position: absolute;
      content: "";
      left: -20px;
      top: 7px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
  }
  &.feedback-item--orange::before {
    background: orange; 
  }
  &.feedback-item--purple::before {
    background: purple;
  }
  &.feedback-item--blue::before {
    background: #00b3ff;
`;

const FeedbacItemFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & > *:first-child {
    flex-direction: column-reverse;
  }
  & > *:last-child {
    position: relative;
    top: -35px;
    align-self: flex-end;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    & > *:first-child {
      flex-direction: row;
    }
    & > *:last-child {
      top: 0;
      align-self: flex-start;
    }
  }
  &.roadmap-flex {
    @media (min-width: 768px) {
      flex-direction: column;
      & > *:first-child {
        flex-direction: column-reverse;
      }
      & > *:last-child {
        position: relative;
        top: -35px;
        align-self: flex-end;
      }
    }
  }
`;
const FeedbackItemLeft = styled.div`
  display: flex;
  gap: 30px;
`;
const FeedbackItemAmount = styled.p`
  align-self: flex-start;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  background: hsla(219, 100%, 50%, 0.1);
  font-weight: 600;
  color: #222;
  &.active {
    flex-direction: row;
  }
  & > * {
    cursor: pointer;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
const FeedbackItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
`;
const FeedbackItemTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #221;
`;
const FeedbackItemDescriptionBox = styled.div``;
const FeedbackItemDescription = styled.p`
  margin-bottom: 10px;
  color: #666;
`;
const FeedbackItemToggleDescriptionBtn = styled.button`
  display: block;
  maring-top: 5px;
  padding: 5px 10px;
  border: 2px solid #6392ea;
  border-radius: 5px;
  color: #0059ff;
`;
const FeedbackItemCategory = styled.div`
  margin-top: 15px;
  display: inline-block;
  align-self: flex-start;
  border-radius: 10px;
  padding: 10px;
  background: hsla(219, 100%, 50%, 0.1);
  font-weight: 600;
  color: #0059ff;
`;
const FeedbackItemRight = styled.div``;
const FeedbackItemLink = styled.p`
  & > * {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #555;
    text-decoration: none;
    & > *:last-child {
      font-weight: 600;
    }
  }
`;

export {
  FeedbackItemBox,
  FeedbackStatusText,
  FeedbacItemFlexContainer,
  FeedbackItemLeft,
  FeedbackItemAmount,
  FeedbackItemTextBox,
  FeedbackItemTitle,
  FeedbackItemDescriptionBox,
  FeedbackItemDescription,
  FeedbackItemToggleDescriptionBtn,
  FeedbackItemCategory,
  FeedbackItemRight,
  FeedbackItemLink,
};
