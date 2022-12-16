import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../../redux/store";
import { changeUsername } from "../../../../redux/reducers/user";
import { changeCommentUsername } from "../../../../redux/reducers/comment";
import {
  ChangeUsernameBox,
  ChangeUsernameHeader,
  ChangeUsernameTitle,
  ChangeUsernameFormControl,
  ChangeUsernameLabel,
  ChangeUsernameInput,
  ChangeUsernameError,
  ChangeUsernameUpdateBtn,
  ChangeUsernameCancelBtn,
} from "./ChangeUsername.styled";
import {
  Alert,
  AlertCancelBtn,
  AlertText,
} from "../../../../styles/FormStyles.styled";
import { changeUsername as updateUsername } from "../../../../api/user";

const ChangeUsername = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const [isUsernameChanged, setIsUsernameChanged] = useState(false);

  useEffect(() => {
    setUsername(user.username);
  }, [user]);

  const handleUpdateUsernameClick = () => {
    (async () => {
      try {
        if (username === user.username) {
          setCredentialsError("Username already in use!");
          setIsUsernameChanged(false);
          return;
        } else {
          setIsLoading(true);
          const response = await updateUsername(
            {
              originalUsername: user.username,
              username,
              password,
            },
            user.accessToken,
            user.refreshToken
          );
          setIsLoading(false);
          if (response.data.isSuccess) {
            dispatch(changeUsername({ username }));
            dispatch(
              changeCommentUsername({
                newUsername: username,
                originalUsername: user.username,
              })
            );
            setIsUsernameChanged(true);
            setCredentialsError("");
          } else {
            setIsUsernameChanged(false);
            setCredentialsError(response.data.message);
          }
        }
      } catch (err: any) {
        console.log(err.response.data);
        setIsUsernameChanged(false);
        setIsLoading(false);
        setCredentialsError(err.response.data.message);
      }
    })();
  };
  const closeUpdateFields = () => {
    setChanged(false);
    setIsUsernameChanged(false);
    setCredentialsError("");
    setUsername(user.username);
    setPassword("");
    setError("");
  };

  const handleUsernameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    switch (targetName) {
      case "username":
        setUsername(e.target.value);
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
    setIsUsernameChanged(false);
  };

  return (
    <ChangeUsernameBox>
      <ChangeUsernameHeader>
        <ChangeUsernameTitle>Update Username</ChangeUsernameTitle>
      </ChangeUsernameHeader>
      {credentialsError && (
        <Alert>
          <AlertText>{credentialsError}</AlertText>
          <AlertCancelBtn onClick={closeAlert}>X</AlertCancelBtn>
        </Alert>
      )}
      {isUsernameChanged && (
        <Alert style={{ border: "2px solid green", color: "green" }}>
          <AlertText style={{ color: "green" }}>
            Username Changed Successfully!
          </AlertText>
          <AlertCancelBtn
            onClick={closeSuccessAlert}
            style={{ color: "green" }}
          >
            X
          </AlertCancelBtn>
        </Alert>
      )}
      <ChangeUsernameFormControl>
        <ChangeUsernameLabel htmlFor="username">Username</ChangeUsernameLabel>
        <ChangeUsernameInput
          onChange={handleUsernameUpdate}
          value={username}
          type="text"
          id="username"
          name="username"
          required
        />
        {username.trim().length < 1 && (
          <ChangeUsernameError>Required</ChangeUsernameError>
        )}
        {error && <ChangeUsernameError>{error}</ChangeUsernameError>}
      </ChangeUsernameFormControl>
      {changed && (
        <>
          <ChangeUsernameFormControl>
            <ChangeUsernameLabel htmlFor="password">
              Password
            </ChangeUsernameLabel>
            <ChangeUsernameInput
              onChange={handleUsernameUpdate}
              value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password to change Username"
            />
            {!password.trim().length && (
              <ChangeUsernameError>Password is required</ChangeUsernameError>
            )}
          </ChangeUsernameFormControl>
          <ChangeUsernameUpdateBtn
            className={
              error || !username.trim().length || password.trim().length < 8
                ? "disabled"
                : ""
            }
            disabled={
              error || !username.trim().length || password.trim().length < 8
                ? true
                : false
            }
            onClick={handleUpdateUsernameClick}
            isLoading={isLoading ? true : false}
          >
            {isLoading ? "Updating..." : "Update"}
          </ChangeUsernameUpdateBtn>
          <ChangeUsernameCancelBtn onClick={closeUpdateFields}>
            Cancel
          </ChangeUsernameCancelBtn>
        </>
      )}
    </ChangeUsernameBox>
  );
};

export default ChangeUsername;
