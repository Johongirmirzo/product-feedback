import styled, { css } from "styled-components";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
  Alert,
  AlertText,
  AlertCancelBtn,
  FormRoutetext,
} from "../../styles/FormStyles.styled";
import { PropTypes } from "../../types/general";

const AddFeedbackFormBox = styled.div`
  border-radius: 10px;
  margin: 20px 0;
  padding: 25px 30px;
  margin-top: 70px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;
const AddFeedbackFormCircle = styled.div`
  position: relative;
  top: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(200deg, #8d21d5, #c40551 90%),
    linear-gradient(#cd1577, #cd1577 25%);
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
const AddFeedbackFormTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const AddFeedbackFormCon = styled(Form)``;
const AddFeedbackFormControl = styled(FormControl)`
  margin-bottom: 30px;
`;
const AddFeedbackFormLabel = styled(FormLabel)`
  color: #111;
  font-weight: 600;
`;
const AddFeedbackFormInput = styled(FormInput)`
  background: #e7e7e7;
`;
const AddFeedbackFormSelect = styled.select`
  display: block;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #546990;
  background: transparent;
  background: #e7e7e7;
`;
const AddFeedbackFormBtn = styled(FormButton)`
  display: inline-block;
  border-radius: 10px;
  padding: 14px 20px;
  width: auto;
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
const AddFeedbackFormFieldError = styled(FormFieldError)``;
const AddFeedbackFormAlert = styled(Alert)``;
const AddFeedbackFormAlertText = styled(AlertText)``;
const AddFeedbackFormAlertCancelBtn = styled(AlertCancelBtn);
const AddFeedbackTextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #546990;
  outline: 0;
  resize: none;
  background: #e7e7e7;
`;

export {
  AddFeedbackFormBox,
  AddFeedbackFormCircle,
  AddFeedbackFormTitle,
  AddFeedbackFormCon,
  AddFeedbackFormControl,
  AddFeedbackFormLabel,
  AddFeedbackFormInput,
  AddFeedbackFormSelect,
  AddFeedbackTextArea,
  AddFeedbackFormBtn,
  AddFeedbackFormFieldError,
  AddFeedbackFormAlert,
  AddFeedbackFormAlertText,
  AddFeedbackFormAlertCancelBtn,
};
