import styled, { css } from "styled-components";
import { PropTypes } from "../../../types/general";

const AddCommentBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 20px 0;
  padding: 28px 30px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;
const AddCommentTitle = styled.h3`
  margin-bottom: 30px;
  color: #222;
  font-size: 20px;
`;
const AddCommentTextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 100px;
  border: 1px solid #546990;
  border-radius: 10px;
  outline: 0;
  background: rgb(237, 238, 242);
  resize: none;
`;
const AddCommentBtn = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 10px;
  padding: 14px 20px;
  align-self: flex-end;
  background: hsl(279, 87%, 50%);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
const AddCommentFieldErrorText = styled.p`
  font-weight: 600;
  color: red;
  font-size: 15px;
`;

export {
  AddCommentBox,
  AddCommentTitle,
  AddCommentTextArea,
  AddCommentBtn,
  AddCommentFieldErrorText,
};
