import styled, { css } from "styled-components";
import {
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../../styles/FormStyles.styled";
import { PropTypes } from "../../../../../types/general";

const ChangeEmailBox = styled.div`
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;
const ChangeEmailHeader = styled.header``;
const ChangeEmailTitle = styled.h2`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, calc(1vw + 1rem), 1.8rem);
  font-weight: 500;
`;
const ChangeEmailFormControl = styled(FormControl)``;
const ChangeEmailLabel = styled(FormLabel)``;
const ChangeEmailInput = styled(FormInput)`
  padding: 8px 8px;
`;
const ChangeEmailError = styled(FormFieldError)``;
const ChangeEmailBtn = styled(FormButton)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px;
  width: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const ChangeEmailUpdateBtn = styled(ChangeEmailBtn)`
  border: 1px solid transparent;
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      display: inline-block;
      width: 120px;
      border: 1px solid transparent;
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
const ChangeEmailCancelBtn = styled(ChangeEmailBtn)`
  margin-left: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #cbcbcb;
  color: #333;
  background: transparent;
`;

export {
  ChangeEmailBox,
  ChangeEmailHeader,
  ChangeEmailTitle,
  ChangeEmailFormControl,
  ChangeEmailLabel,
  ChangeEmailInput,
  ChangeEmailError,
  ChangeEmailUpdateBtn,
  ChangeEmailCancelBtn,
};
