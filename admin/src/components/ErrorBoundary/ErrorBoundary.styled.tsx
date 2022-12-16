import styled from "styled-components";

const ErrorBoundaryBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorBoundaryTextBox = styled.div`
  text-align: center;
`;
const ErrorBoundaryHeader = styled.header``;
const ErrorBoundaryTitle = styled.h1``;
const ErrorBoundaryDescription = styled.p`
  margin-top: 10px;
  color: #444;
  font-weight: 600;
`;
const ErrorBoundaryBtn = styled.button`
  margin-top: 20px;
  padding: 14px 12px;
  border: 0;
  border-radius: 5px;
  background: #0b4971;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.25s ease-out;
  cursor: pointer;
  &:hover {
    background: #10588b;
  }
`;

export {
  ErrorBoundaryBox,
  ErrorBoundaryTextBox,
  ErrorBoundaryHeader,
  ErrorBoundaryTitle,
  ErrorBoundaryDescription,
  ErrorBoundaryBtn,
};
