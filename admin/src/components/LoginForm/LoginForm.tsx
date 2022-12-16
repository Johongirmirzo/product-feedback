import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { loginSchema } from "../../schemas/loginSchema";
import {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginForm,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginFieldError,
  LoginAlert,
  LoginAlertText,
  LoginAlertCancelBtn,
} from "./LoginForm.styled";
import { loginUser, logoutUser } from "../../api/user";

const Login = () => {
  const loginRememberUserData = JSON.parse(
    localStorage.getItem("login-remember-user") || "{}"
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const closeAlertMessage = (index: number) => {
    setError(error.filter((err, i) => i !== index));
  };

  return (
    <LoginBox>
      <LoginFormBox>
        {error &&
          error.map((err, index) => (
            <LoginAlert>
              <LoginAlertText>{err}</LoginAlertText>
              <LoginAlertCancelBtn
                onClick={closeAlertMessage.bind(null, index)}
              >
                X
              </LoginAlertCancelBtn>
            </LoginAlert>
          ))}
        <LoginTextBox>
          <LoginTitle>Admin Login</LoginTitle>
        </LoginTextBox>
        <Formik
          initialValues={{
            email: loginRememberUserData.email || "",
            password: loginRememberUserData.password || "",
            rememberMe: false,
          }}
          validationSchema={loginSchema}
          onSubmit={async (loginData) => {
            console.log(loginData);
            try {
              setIsLoading(true);
              const response = await loginUser(loginData);
              setIsLoading(false);
              console.log("Login Response", response);
              if (response.status === 429) {
                setError([response.data]);
                await logoutUser();
              } else if (response.data._doc.isAdmin) {
                if (loginData.rememberMe) {
                  localStorage.setItem(
                    "login-remember-admin",
                    JSON.stringify(loginData)
                  );
                } else {
                  localStorage.removeItem("login-remember-admin");
                }
                localStorage.setItem(
                  "token",
                  JSON.stringify({
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                  })
                );
                dispatch(
                  setUser({
                    id: response.data._doc._id,
                    username: response.data._doc.username,
                    email: response.data._doc.email,
                    isThirdPartyAuth: false,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                  })
                );
                setError([]);
                navigate("/");
              } else {
                setError(["You are not authorized! You are not admin!"]);
                await logoutUser();
              }
            } catch (error) {
              setIsLoading(false);
              setError(["Wrong Credentials"]);
            }
          }}
        >
          {({
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            handleChange,
            values,
          }) => (
            <LoginForm onSubmit={handleSubmit}>
              <LoginFormControl>
                <LoginLabel htmlFor="email">Email</LoginLabel>
                <LoginInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <LoginFieldError>{errors.email}</LoginFieldError>
                ) : null}
              </LoginFormControl>

              <LoginFormControl>
                <LoginLabel htmlFor="password">Password</LoginLabel>
                <LoginInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Please enter password"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && touched.password ? (
                  <LoginFieldError>{errors.password}</LoginFieldError>
                ) : null}
              </LoginFormControl>
              <LoginButton
                isLoading={isLoading ? true : false}
                disabled={isLoading ? true : false}
                type="submit"
              >
                {isLoading ? "Logging In..." : "Login"}
              </LoginButton>
            </LoginForm>
          )}
        </Formik>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;
