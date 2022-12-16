import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { changeEmail } from "../../../../redux/reducers/user";
import {
  ChangeEmailBox,
  ChangeEmailHeader,
  ChangeEmailTitle,
  ChangeEmailFormControl,
  ChangeEmailLabel,
  ChangeEmailInput,
  ChangeEmailError,
  ChangeEmailUpdateBtn,
  ChangeEmailCancelBtn,
} from "./ChangeEmail.styled";
import {
  Alert,
  AlertCancelBtn,
  AlertText,
} from "../../../../styles/FormStyles.styled";
import { changeEmail as updateEmail } from "../../../../api/user";

const ChangeEmail = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const [isEmailChanged, setIsEmailChanged] = useState(false);

  useEffect(() => {
    setEmail(user.email);
  }, [user]);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleUpdateEmailClick = () => {
    if (!validateEmail(email)) {
      return setError("Please provide valid email");
    }
    (async () => {
      try {
        if (email === user.email) {
          setIsEmailChanged(false);
          setCredentialsError("Email already in use!");
        } else {
          setIsLoading(true);
          const response = await updateEmail(
            {
              originalEmail: user.email,
              email,
              password,
            },
            user.accessToken,
            user.refreshToken
          );
          setIsLoading(false);
          console.log(response);
          if (response.data.isSuccess) {
            dispatch(changeEmail({ email }));
            setIsEmailChanged(true);
            setCredentialsError("");
          } else {
            setIsEmailChanged(false);
            setCredentialsError(response.data.message);
          }
        }
      } catch (err: any) {
        setIsEmailChanged(false);
        setIsLoading(false);
        console.log(err.response);
        setCredentialsError(err.response.data.message);
      }
    })();
  };
  const closeUpdateFields = () => {
    setChanged(false);
    setIsEmailChanged(false);
    setCredentialsError("");
    setEmail(user.email);
    setPassword("");
    setError("");
  };

  const handleEmailUpdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    switch (targetName) {
      case "email":
        setEmail(e.target.value);
        if (!changed) {
          setChanged(true);
        }
        break;
      case "password":
        setPassword(e.target.value);
        break;
    }
  };
  const closeAlert = () => {
    setCredentialsError("");
  };
  const closeSuccessAlert = () => {
    setIsEmailChanged(false);
  };

  return (
    <ChangeEmailBox>
      <ChangeEmailHeader>
        <ChangeEmailTitle>Update Email</ChangeEmailTitle>
      </ChangeEmailHeader>
      {credentialsError && (
        <Alert>
          <AlertText>{credentialsError}</AlertText>
          <AlertCancelBtn onClick={closeAlert}>X</AlertCancelBtn>
        </Alert>
      )}
      {isEmailChanged && (
        <Alert style={{ border: "2px solid green", color: "green" }}>
          <AlertText style={{ color: "green" }}>
            Email Changed Successfully!
          </AlertText>
          <AlertCancelBtn
            onClick={closeSuccessAlert}
            style={{ color: "green" }}
          >
            X
          </AlertCancelBtn>
        </Alert>
      )}
      <ChangeEmailFormControl>
        <ChangeEmailLabel htmlFor="email">Email Address</ChangeEmailLabel>
        <ChangeEmailInput
          onChange={handleEmailUpdateChange}
          value={email}
          type="email"
          id="email"
          name="email"
          required
        />
        {email.trim().length < 1 && (
          <ChangeEmailError>Required</ChangeEmailError>
        )}
        {error && <ChangeEmailError>{error}</ChangeEmailError>}
      </ChangeEmailFormControl>
      {changed && (
        <>
          <ChangeEmailFormControl>
            <ChangeEmailLabel htmlFor="password">Password</ChangeEmailLabel>
            <ChangeEmailInput
              onChange={handleEmailUpdateChange}
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password to change email"
            />
            {password.trim().length < 1 && (
              <ChangeEmailError>Password is Required</ChangeEmailError>
            )}
          </ChangeEmailFormControl>
          <ChangeEmailUpdateBtn
            onClick={handleUpdateEmailClick}
            className={
              error || !email.trim().length || password.trim().length < 8
                ? "disabled"
                : ""
            }
            disabled={
              error || !email.trim().length || password.trim().length < 8
                ? true
                : false
            }
            isLoading={isLoading ? true : false}
          >
            {isLoading ? "Updating..." : "Update"}
          </ChangeEmailUpdateBtn>
          <ChangeEmailCancelBtn onClick={closeUpdateFields}>
            Cancel
          </ChangeEmailCancelBtn>
        </>
      )}
    </ChangeEmailBox>
  );
};

export default ChangeEmail;
