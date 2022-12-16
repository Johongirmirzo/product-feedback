import styled, { css } from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormRoutetext,
  FormFieldError,
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/FormStyles.styled";
import { PropTypes } from "../../types/general";

interface LoginInputProps {
  isDarkMode: boolean;
}

const LoginBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginFormBox = styled.section`
  max-width: 400px;
  width: 90%;
  background: #fff;
  border-radius: 5px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const LoginTextBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;
const LoginTitle = styled.h1`
  color: #111;
  font-weight: 600;
  font-size: 1.9rem;
`;
const LoginDescription = styled.p`
  color: #555;
  padding-top: 5px;
  font-size: 1.1rem;
`;

const LoginForm = styled(Form)``;
const LoginFormControl = styled(FormControl)``;
const LoginLabel = styled(FormLabel)``;
const LoginInput = styled(FormInput)``;
const LoginButton = styled(FormButton)`
  ${(props: PropTypes) =>
    props.isLoading &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
const LoginRoutetext = styled(FormRoutetext)`
  & a {
    color: blue;
    margin-left: 10px;
  }
`;
const LoginFieldError = styled(FormFieldError)``;
const LoginAlert = styled(Alert)``;
const LoginAlertText = styled(AlertText)``;
const LoginAlertCancelBtn = styled(AlertCancelBtn)``;

const LoginHrBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  & > *:not(:nth-child(2)) {
    flex: 1;
  }
`;
const LoginHr = styled.hr`
  border-top: 1px solid #111;
`;
const LoginHrText = styled.p``;

const LoginIconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  & > *.MuiSvgIcon-root {
    font-size: 40px;
  }
`;
const LoginFacebookIcon = styled(FacebookIcon)`
  cursor: pointer;
  color: #3b5998;
`;
const LoginTwitterIcon = styled(LinkedInIcon)`
  cursor: pointer;
  color: #1da1f2;
`;
const LoginGoogleIcon = styled(GoogleIcon)`
  cursor: pointer;
  color: #dd4b39;
`;

export {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginDescription,
  LoginForm,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginRoutetext,
  LoginFieldError,
  LoginHrBox,
  LoginHr,
  LoginHrText,
  LoginIconsBox,
  LoginGoogleIcon,
  LoginFacebookIcon,
  LoginTwitterIcon,
  LoginAlert,
  LoginAlertText,
  LoginAlertCancelBtn,
};
