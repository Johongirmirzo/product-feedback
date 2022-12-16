import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import {
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
} from "./ChangePassword.styled";
import {
  Alert,
  AlertCancelBtn,
  AlertText,
} from "../../../../styles/FormStyles.styled";
import { changePassword } from "../../../../api/user";

const ChangePassword = () => {
  const { username, accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const [isLoading, setIsLoading] = useState(false);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [changed, setChanged] = useState(false);
  const [mismatchPasswrod, setMismatchPasswrod] = useState("");
  const [error, setError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const updatePassword = () => {
    if (newPassword.trim() !== confirmNewPassword.trim()) {
      setMismatchPasswrod("New Password Didn't Match");
    } else {
      (async () => {
        try {
          setIsLoading(true);
          const response = await changePassword(
            {
              username,
              newPassword,
              currentPassword: password,
              newConfirmPassword: confirmNewPassword,
            },
            accessToken,
            refreshToken
          );
          setIsLoading(false);
          if (response.data.isSuccess) {
            setIsPasswordChanged(true);
            setCredentialsError("");
          } else {
            setIsPasswordChanged(false);
            setCredentialsError(response.data.message);
          }
        } catch (err: any) {
          setIsLoading(false);
          setIsPasswordChanged(false);
          setCredentialsError(err.response.data.message);
        }
      })();
      setMismatchPasswrod("");
    }
  };
  const closeUpdateFields = () => {
    setChanged(false);
    setIsPasswordChanged(false);
    setCredentialsError("");
    setPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
  };

  const handlePasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetName = e.target.name;
    const {
      target: { value: passwordValue },
    } = e;
    switch (targetName) {
      case "password":
        setPassword(passwordValue);
        if (!changed) {
          setChanged(true);
        }
        break;
      case "new-password":
        setNewPassword(passwordValue);
        break;
      case "confirm-password":
        setConfirmNewPassword(passwordValue);
    }
  };
  const closeAlert = () => {
    setCredentialsError("");
  };
  const closeSuccessAlert = () => {
    setIsPasswordChanged(false);
  };

  return (
    <ChangePasswordBox>
      <ChangePasswordHeader>
        <ChangePasswordTitle>Update Password</ChangePasswordTitle>
      </ChangePasswordHeader>
      {credentialsError && (
        <Alert>
          <AlertText>{credentialsError}</AlertText>
          <AlertCancelBtn onClick={closeAlert}>X</AlertCancelBtn>
        </Alert>
      )}
      {isPasswordChanged && (
        <Alert style={{ border: "2px solid green", color: "green" }}>
          <AlertText style={{ color: "green" }}>
            Password Changed Successfully!
          </AlertText>
          <AlertCancelBtn
            onClick={closeSuccessAlert}
            style={{ color: "green" }}
          >
            X
          </AlertCancelBtn>
        </Alert>
      )}
      <ChangePasswordFormControl>
        <ChangePasswordLabel htmlFor="password">
          Current Password
        </ChangePasswordLabel>
        <ChangePasswordInput
          onChange={handlePasswordUpdate}
          value={password}
          type="password"
          id="password"
          name="password"
          placeholder="Enter current password"
        />
        {password.trim().length < 1 && (
          <ChangePasswordError>Required</ChangePasswordError>
        )}
        {error && <ChangePasswordError>{error}</ChangePasswordError>}
      </ChangePasswordFormControl>
      {changed && (
        <>
          <ChangePasswordFormControl>
            <ChangePasswordLabel htmlFor="new-password">
              New Password
            </ChangePasswordLabel>
            <ChangePasswordInput
              onChange={handlePasswordUpdate}
              value={newPassword}
              type="password"
              id="new-password"
              name="new-password"
              placeholder="Enter new password"
            />
            {newPassword.trim().length < 8 && (
              <ChangePasswordError>
                Password must be at least 8 characters long
              </ChangePasswordError>
            )}
          </ChangePasswordFormControl>
          <ChangePasswordFormControl>
            <ChangePasswordLabel htmlFor="confirm-password">
              Confirm New Password
            </ChangePasswordLabel>
            <ChangePasswordInput
              onChange={handlePasswordUpdate}
              value={confirmNewPassword}
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Enter confirm new password"
            />
            {confirmNewPassword.trim().length < 8 && (
              <ChangePasswordError>
                Password must be at least 8 characters long
              </ChangePasswordError>
            )}
            {mismatchPasswrod && (
              <ChangePasswordError>{mismatchPasswrod}</ChangePasswordError>
            )}
          </ChangePasswordFormControl>
          <ChangePasswordUpdateBtn
            onClick={updatePassword}
            style={
              password.trim().length < 8 ||
              newPassword.trim().length < 8 ||
              confirmNewPassword.trim().length < 8
                ? {
                    opacity: ".5",
                    cursor: "not-allowed",
                  }
                : {}
            }
            disabled={
              password.trim().length < 8 ||
              newPassword.trim().length < 8 ||
              confirmNewPassword.trim().length < 8
                ? true
                : false
            }
            isLoading={isLoading ? true : false}
          >
            {isLoading ? "Updating..." : "Update"}
          </ChangePasswordUpdateBtn>
          <ChangePasswordCancelBtn onClick={closeUpdateFields}>
            Cancel
          </ChangePasswordCancelBtn>
        </>
      )}
    </ChangePasswordBox>
  );
};

export default ChangePassword;
