import styled, { css } from "styled-components";
import {
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormFieldError,
} from "../../../../styles/FormStyles.styled";
import { PropTypes } from "../../../../types/general";

const ChangeUsernameBox = styled.div`
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: #f7f7f7;
`;
const ChangeUsernameHeader = styled.header``;
const ChangeUsernameTitle = styled.h2`
  font-size: clamp(1.5rem, calc(1vw + 1rem), 1.8rem);
  margin-bottom: 20px;
`;
const ChangeUsernameFormControl = styled(FormControl)``;
const ChangeUsernameLabel = styled(FormLabel)``;
const ChangeUsernameInput = styled(FormInput)`
  padding: 8px 8px;
`;
const ChangeUsernameError = styled(FormFieldError)``;
const ChangeUsernameBtn = styled(FormButton)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px;
  width: 100px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;
const ChangeUsernameUpdateBtn = styled(ChangeUsernameBtn)`
  &.disabled {
    border: 1px solid transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      display: inline-block;
      opacity: 0.5;
      cursor: not-allowed;
      width: 130px;
    `}
`;
const ChangeUsernameCancelBtn = styled(ChangeUsernameBtn)`
  margin-left: 20px;
  border: 1px solid #cbcbcb;
  color: #333;
  background: transparent;
`;

export {
  ChangeUsernameBox,
  ChangeUsernameHeader,
  ChangeUsernameTitle,
  ChangeUsernameFormControl,
  ChangeUsernameLabel,
  ChangeUsernameInput,
  ChangeUsernameError,
  ChangeUsernameUpdateBtn,
  ChangeUsernameCancelBtn,
};
