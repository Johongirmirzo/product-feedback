import styled from "styled-components";

const ReplyFormBox = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  padding: 20px;
`;
const ReplyFormTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ReplyFormTextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 100px;
  outline: 0;
  border: 1px solid #546990;
  resize: none;
`;
const ReplyFormError = styled.p`
  color: red;
  font-weight: 600;
  font-size: 13px;
`;

const Button = styled.button`
  margin-top: 20px;
  border: 0;
  border-radius: 5px;
  padding: 10px 20px;
  align-self: flex-end;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;
const ReplyFormSubmitBtn = styled(Button)`
  background: hsl(279, 87%, 50%);
`;
const ReplyFormCancelBtn = styled(Button)`
  background: #223;
  margin-left: 20px;
`;

export {
  ReplyFormBox,
  ReplyFormTitle,
  ReplyFormTextArea,
  ReplyFormError,
  ReplyFormSubmitBtn,
  ReplyFormCancelBtn,
};
