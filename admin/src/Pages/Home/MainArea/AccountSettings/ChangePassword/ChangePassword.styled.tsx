import styled, { css } from "styled-components";
import {
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../../styles/FormStyles.styled";
import { PropTypes } from "../../../../../types/general";

const ChangePasswordBox = styled.div`
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #f7f7f7;
`;
const ChangePasswordHeader = styled.header``;
const ChangePasswordTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: clamp(1.5rem, calc(1vw + 1rem), 1.8rem);
`;
const ChangePasswordFormControl = styled(FormControl)``;
const ChangePasswordLabel = styled(FormLabel)``;
const ChangePasswordInput = styled(FormInput)`
  padding: 8px 8px;
`;
const ChangePasswordError = styled(FormFieldError)``;
const ChangePasswordDescription = styled.p`
  font-size: 15px;
  color: #555;
`;
const ChangePasswordBtn = styled(FormButton)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px;
  width: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const ChangePasswordUpdateBtn = styled(ChangePasswordBtn)`
  border: 1px solid transparent;
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      display: inline-block;
      width: 120px;
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;
const ChangePasswordCancelBtn = styled(ChangePasswordBtn)`
  margin-left: 20px;
  border: 1px solid #cbcbcb;
  color: #333;
  background: transparent;
`;

export {
  ChangePasswordBox,
  ChangePasswordHeader,
  ChangePasswordTitle,
  ChangePasswordFormControl,
  ChangePasswordLabel,
  ChangePasswordInput,
  ChangePasswordError,
  ChangePasswordDescription,
  ChangePasswordUpdateBtn,
  ChangePasswordCancelBtn,
};
