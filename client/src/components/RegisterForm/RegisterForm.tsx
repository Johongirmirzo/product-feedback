import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";
import {
  RegisterBox,
  RegisterFormBox,
  RegisterTextBox,
  RegisterTitle,
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
  RegisterGoogleIcon,
  RegisterTwitterIcon,
  RegisterAlert,
  RegisterAlertText,
  RegisterAlertCancelBtn,
} from "./RegisterForm.styled";
import { ENDPOINTS } from "../../config/endpoints";
import { registerUser } from "../../api/user";

const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<string[]>([]);

  const authenticateViaGoogle = () => {
    window.open(ENDPOINTS.GOOGLE_AUTH_URL, "_self");
    localStorage.setItem("authProvider", "google");
  };
  const authenticateViaFacebook = () => {
    window.open(ENDPOINTS.FACEBOOK_AUTH_URL, "_self");
    localStorage.setItem("authProvider", "facebook");
  };
  const authenticateViaLinkedin = () => {
    window.open(ENDPOINTS.LINKEDIN_AUTH_URL, "_self");
    localStorage.setItem("authProvider", "linkedin");
  };

  const closeAlertMessage = (index: number) => {
    setErrors(errors.filter((err, i) => i !== index));
  };

  console.log(errors);
  return (
    <RegisterBox>
      <RegisterFormBox>
        {errors?.map((err, index) => (
          <RegisterAlert key={index}>
            <RegisterAlertText>{err}</RegisterAlertText>
            <RegisterAlertCancelBtn
              onClick={closeAlertMessage.bind(null, index)}
            >
              X
            </RegisterAlertCancelBtn>
          </RegisterAlert>
        ))}

        <RegisterTextBox>
          <RegisterTitle>Create Account</RegisterTitle>
        </RegisterTextBox>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerSchema}
          onSubmit={async (userData) => {
            try {
              const response = await registerUser(userData);
              console.log("Register Respone", response);
              if (response.status === 429) {
                setErrors([response.data]);
              } else if (response.data.message) {
                localStorage.removeItem("user");
                navigate("/login");
              } else {
                setErrors(response.data);
              }
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {(props) => (
            <RegisterForm onSubmit={props.handleSubmit}>
              <RegisterFormControl>
                <RegisterLabel htmlFor="username">Username</RegisterLabel>
                <RegisterInput
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Please enter username"
                  value={props.values.username}
                  onChange={props.handleChange}
                />
                {props.errors.username && props.touched.username ? (
                  <RegisterFieldError>
                    {props.errors.username}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="email">Email</RegisterLabel>
                <RegisterInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
                {props.errors.email && props.touched.email ? (
                  <RegisterFieldError>{props.errors.email}</RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="password">Password</RegisterLabel>
                <RegisterInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={props.values.password}
                  onChange={props.handleChange}
                />
                {props.errors.password && props.touched.password ? (
                  <RegisterFieldError>
                    {props.errors.password}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterFormControl>
                <RegisterLabel htmlFor="c-password">
                  Confirm Password
                </RegisterLabel>
                <RegisterInput
                  type="password"
                  id="c-password"
                  name="confirmPassword"
                  placeholder="Please confirm password"
                  value={props.values.confirmPassword}
                  onChange={props.handleChange}
                />
                {props.errors.confirmPassword &&
                props.touched.confirmPassword ? (
                  <RegisterFieldError>
                    {props.errors.confirmPassword}
                  </RegisterFieldError>
                ) : null}
              </RegisterFormControl>
              <RegisterButton
                type="submit"
                style={
                  props.isSubmitting && errors.length < 1
                    ? { opacity: ".4", cursor: "not-allowed" }
                    : { opacity: "1", cursor: "pointer" }
                }
              >
                {props.isSubmitting && errors.length < 1 ? (
                  <div>Registering...</div>
                ) : (
                  "Register"
                )}
              </RegisterButton>
            </RegisterForm>
          )}
        </Formik>
        <RegisterRoutetext>
          Already Have an account? <Link to="/login">Sign In</Link>
        </RegisterRoutetext>
        <RegisterHrBox>
          <RegisterHr />
          <RegisterHrText>or sign up with</RegisterHrText>
          <RegisterHr />
        </RegisterHrBox>

        <RegisterIconsBox>
          <RegisterFacebookIcon onClick={authenticateViaFacebook}>
            Facebook
          </RegisterFacebookIcon>
          <RegisterGoogleIcon onClick={authenticateViaGoogle}>
            Google
          </RegisterGoogleIcon>
          <RegisterTwitterIcon onClick={authenticateViaLinkedin}>
            Linkedin
          </RegisterTwitterIcon>
        </RegisterIconsBox>
      </RegisterFormBox>
    </RegisterBox>
  );
};

export default Register;
