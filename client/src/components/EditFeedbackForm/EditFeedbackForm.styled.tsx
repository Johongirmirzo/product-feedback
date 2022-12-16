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
} from "../../styles/FormStyles.styled";
import { PropTypes } from "../../types/general";

const EditFeedbackFormBox = styled.div`
  border-radius: 10px;
  margin: 20px 0;
  padding: 25px 30px;
  margin-top: 70px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;
const EditFeedbackFormCircle = styled.div`
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
const EditFeedbackFormTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const EditFeedbackFormCon = styled(Form)``;
const EditFeedbackFormControl = styled(FormControl)`
  margin-bottom: 30px;
`;
const EditFeedbackFormLabel = styled(FormLabel)`
  color: #111;
  font-weight: 600;
`;
const EditFeedbackFormInput = styled(FormInput)`
  background: #e7e7e7;
`;
const EditFeedbackFormSelect = styled.select`
  display: block;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #546990;
  background: transparent;
  background: #e7e7e7;
`;
const EditFeedbackFormBtn = styled(FormButton)`
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
const EditFeedbackFormFieldError = styled(FormFieldError)``;
const EditFeedbackFormAlert = styled(Alert)``;
const EditFeedbackFormAlertText = styled(AlertText)``;
const EditFeedbackFormAlertCancelBtn = styled(AlertCancelBtn);
const EditFeedbackTextArea = styled.textarea`
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
  EditFeedbackFormBox,
  EditFeedbackFormCircle,
  EditFeedbackFormTitle,
  EditFeedbackFormCon,
  EditFeedbackFormControl,
  EditFeedbackFormLabel,
  EditFeedbackFormInput,
  EditFeedbackFormSelect,
  EditFeedbackTextArea,
  EditFeedbackFormBtn,
  EditFeedbackFormFieldError,
  EditFeedbackFormAlert,
  EditFeedbackFormAlertText,
  EditFeedbackFormAlertCancelBtn,
};
