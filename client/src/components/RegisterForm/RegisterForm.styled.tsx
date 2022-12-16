import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

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

interface RegisterInputProps {
  isDarkMode: boolean;
}

const RegisterBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterFormBox = styled.section`
  max-width: 400px;
  width: 90%;
  margin: 20px 0;
  background: #fff;
  border-radius: 5px;
  padding: 25px 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const RegisterTextBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;
const RegisterTitle = styled.h1`
  color: #111;
  font-weight: 600;
  font-size: 1.9rem;
`;
const RegisterDescription = styled.p`
  color: #222;
  font-weight: 500;
  padding-top: 5px;
  font-size: 1.1rem;
`;
const RegisterForm = styled(Form)``;
const RegisterFormControl = styled(FormControl)``;
const RegisterLabel = styled(FormLabel)``;
const RegisterInput = styled(FormInput)``;
const RegisterButton = styled(FormButton)``;
const RegisterRoutetext = styled(FormRoutetext)`
  & a {
    color: blue;
    margin-left: 10px;
  }
`;
const RegisterFieldError = styled(FormFieldError)``;
const RegisterAlert = styled(Alert)``;
const RegisterAlertText = styled(AlertText)``;
const RegisterAlertCancelBtn = styled(AlertCancelBtn)``;

const RegisterHrBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  & > *:not(:nth-child(2)) {
    flex: 1;
  }
`;
const RegisterHr = styled.hr`
  border-top: 1px solid #111;
`;
const RegisterHrText = styled.p``;

const RegisterIconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  & > *.MuiSvgIcon-root {
    font-size: 40px;
  }
`;
const RegisterFacebookIcon = styled(FacebookIcon)`
  cursor: pointer;
  color: #3b5998;
`;
const RegisterTwitterIcon = styled(LinkedInIcon)`
  cursor: pointer;
  color: #1da1f2;
`;
const RegisterGoogleIcon = styled(GoogleIcon)`
  cursor: pointer;
  color: #dd4b39;
`;

export {
  RegisterBox,
  RegisterFormBox,
  RegisterTextBox,
  RegisterTitle,
  RegisterDescription,
  RegisterForm,
  RegisterFormControl,
  RegisterLabel,
  RegisterInput,
  RegisterButton,
  RegisterRoutetext,
  RegisterFieldError,
  RegisterHrBox,
  RegisterHr,
  RegisterHrText,
  RegisterIconsBox,
  RegisterFacebookIcon,
  RegisterTwitterIcon,
  RegisterGoogleIcon,
  RegisterAlert,
  RegisterAlertText,
  RegisterAlertCancelBtn,
};
