import styled, { css } from "styled-components";
import { PropTypes } from "../../../../types/general";

const EditCommentFormBox = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  padding: 20px;
`;
const EditCommentFormTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.15rem;
  font-weight: 600;
`;
const EditCommentFormTextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 100px;
  outline: 0;
  border: 1px solid #546990;
  resize: none;
`;
const EditCommentFormError = styled.p`
  color: red;
  font-weight: 600;
  font-size: 13px;
`;
const Button = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  padding: 7px 10px;
  align-self: flex-end;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;
const EditCommentFormSubmitBtn = styled(Button)`
  background: hsl(279, 87%, 50%);
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
const EditCommentFormCancelBtn = styled(Button)`
  background: #223;
  margin-left: 20px;
`;

export {
  EditCommentFormBox,
  EditCommentFormTitle,
  EditCommentFormTextArea,
  EditCommentFormError,
  EditCommentFormSubmitBtn,
  EditCommentFormCancelBtn,
};
