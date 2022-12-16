import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import ChangeUsername from "./ChangeUsername/ChangeUsername";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";

import {
  AccountSettingsBox,
  AccountSettingsHeader,
  AccountSettingsTitle,
} from "./AccountSettings.styled";

const AccountSettings = () => {
  const user = useSelector((state: RootState) => state.user);

  console.log(user);
  return (
    <AccountSettingsBox>
      <AccountSettingsHeader>
        <AccountSettingsTitle>Account Settings</AccountSettingsTitle>
      </AccountSettingsHeader>
      {!user.isThirdPartyAuth && (
        <>
          <ChangeUsername />
          <ChangeEmail />
          <ChangePassword />
        </>
      )}
    </AccountSettingsBox>
  );
};

export default AccountSettings;
