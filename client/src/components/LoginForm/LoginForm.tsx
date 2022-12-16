import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
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
} from "./LoginForm.syled";
import { loginUser, logoutUser } from "../../api/user";
import { ENDPOINTS } from "../../config/endpoints";

const Login = () => {
  const loginRememberUserData = JSON.parse(
    localStorage.getItem("login-remember-user") || "{}"
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    const user = {
      id: "",
      username: "",
      email: "",
      userPhoto: "",
      isThirdPartyAuth: true,
      isAdmin: false,
      accessToken: "",
      refreshToken: "",
    };
    const authResUrl = window.location.search.slice(1);
    console.log(authResUrl);
    if (authResUrl) {
      const queryParams = new URLSearchParams(authResUrl);
      for (const param of queryParams) {
        if (param[0] === "id") {
          user["id"] = param[1];
        } else if (param[0] === "username") {
          user["username"] = param[1];
        } else if (param[0] === "email") {
          user["email"] = param[1];
        } else if (param[0] === "accessToken") {
          user["accessToken"] = param[1];
          localStorage.setItem(
            "token",
            JSON.stringify({ accessToken: param[1] })
          );
        } else if (param[0] === "refreshToken") {
          user["refreshToken"] = param[1];
          const token = JSON.parse(localStorage.getItem("token") || "{}");
          localStorage.setItem(
            "token",
            JSON.stringify({ ...token, refreshToken: param[1] })
          );
        }
      }
      user.userPhoto = authResUrl.split("userPhoto")[1].slice(1)
        ? authResUrl.split("userPhoto")[1].slice(1)
        : "";
      console.log(authResUrl.split("userPhoto")[1]);
      dispatch(setUser(user));
      setError([]);
      navigate("/");
    }
  }, []);

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
          <LoginTitle>Login to Your Account</LoginTitle>
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
              console.log("Login Client Response", response);
              console.log(
                "Access token decode:",
                decode(response.data.accessToken)
              );
              console.log(
                "Refresh token decode:",
                decode(response.data.accessToken)
              );
              if (response.status === 429) {
                await logoutUser();
                setIsLoading(false);
                setError([response.data]);
              } else if (response.status !== 200) {
                setError(["Wrong Credentials"]);
                setIsLoading(false);
              } else {
                if (loginData.rememberMe) {
                  localStorage.setItem(
                    "login-remember-user",
                    JSON.stringify(loginData)
                  );
                } else {
                  localStorage.removeItem("login-remember-user");
                }

                setIsLoading(false);
                dispatch(
                  setUser({
                    id: response.data._doc._id,
                    username: response.data._doc.username,
                    email: response.data._doc.email,
                    isThirdPartyAuth: false,
                    isAdmin: response.data._doc.isAdmin,
                    userPhoto: response.data._doc?.profilePic
                      ? response.data._doc.profilePic
                      : "",
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                  })
                );
                localStorage.setItem(
                  "token",
                  JSON.stringify({
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                  })
                );
                setError([]);
                navigate("/");
              }
            } catch (error) {
              console.log(error);
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
              <LoginFormControl>
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  checked={values.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="rememberMe">Remember Me</label>
              </LoginFormControl>
              <LoginButton
                type="submit"
                disabled={isLoading ? true : false}
                isLoading={isLoading ? true : false}
              >
                {isLoading ? "Logging In..." : "Login"}
              </LoginButton>
            </LoginForm>
          )}
        </Formik>
        <LoginRoutetext>
          Don't have an acoount yet?
          <Link to="/register"> Register</Link>
        </LoginRoutetext>
        <LoginHrBox>
          <LoginHr />
          <LoginHrText>or sign with</LoginHrText>
          <LoginHr />{" "}
        </LoginHrBox>{" "}
        <LoginIconsBox>
          <LoginFacebookIcon onClick={authenticateViaFacebook}>
            Facebook
          </LoginFacebookIcon>
          <LoginGoogleIcon onClick={authenticateViaGoogle}>
            Google
          </LoginGoogleIcon>
          <LoginTwitterIcon onClick={authenticateViaLinkedin}>
            Linkedin
          </LoginTwitterIcon>
        </LoginIconsBox>
      </LoginFormBox>
    </LoginBox>
  );
};

export default Login;

/**
 *
 * https://product-feedbacck.netlify.app/login?id=63514b538ef833360db98af5&username=Johongir%20Rahimov&email=johongir_rahimov@bk.ru&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE0YjUzOGVmODMzMzYwZGI5OGFmNSIsInVzZXJuYW1lIjoiSm9ob25naXIgUmFoaW1vdiIsImlhdCI6MTY2NjI3MjMzNiwiZXhwIjoxNjY2MjczMjM2fQ.2LUPdbXxuZgVtdMV-XKhXZeX0wBbKSuPmhRQrGt_Ku0&refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE0YjUzOGVmODMzMzYwZGI5OGFmNSIsInVzZXJuYW1lIjoiSm9ob25naXIgUmFoaW1vdiIsImlhdCI6MTY2NjI3MjMzNiwiZXhwIjoxNjk3ODI5OTM2fQ.QCmzT8Lc5BbBxIb9o2rT6nxcmpSxyuyyix6Q6pTP4jg&userPhoto=https://media-exp1.licdn.com/dms/image/C4E03AQHSljqR4HaSTQ/profile-displayphoto-shrink_100_100/0/1639681565821?e=1671667200&v=beta&t=UmwxH5Y8_bbQottOcX000TXjndLOP5qe2G1At4OSxEE/login?id=63514b538ef833360db98af5&username=Johongir%20Rahimov&email=johongir_rahimov@bk.ru&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE0YjUzOGVmODMzMzYwZGI5OGFmNSIsInVzZXJuYW1lIjoiSm9ob25naXIgUmFoaW1vdiIsImlhdCI6MTY2NjI3MjMzNiwiZXhwIjoxNjY2MjczMjM2fQ.2LUPdbXxuZgVtdMV-XKhXZeX0wBbKSuPmhRQrGt_Ku0&refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTE0YjUzOGVmODMzMzYwZGI5OGFmNSIsInVzZXJuYW1lIjoiSm9ob25naXIgUmFoaW1vdiIsImlhdCI6MTY2NjI3MjMzNiwiZXhwIjoxNjk3ODI5OTM2fQ.QCmzT8Lc5BbBxIb9o2rT6nxcmpSxyuyyix6Q6pTP4jg&userPhoto=https://media-exp1.licdn.com/dms/image/C4E03AQHSljqR4HaSTQ/profile-displayphoto-shrink_100_100/0/1639681565821?e=1671667200&v=beta&t=UmwxH5Y8_bbQottOcX000TXjndLOP5qe2G1At4OSxEE
 */
