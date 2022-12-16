import React from "react";
import ChangeProfilePhoto from "./ChangeProfilePhoto/ChangeProfilePhoto";
import {
  PersonalInfoBox,
  PersonalInfoHeader,
  PersonalInfoTitle,
} from "./PersonalInfo.styled";

const PersonalInfo = () => {
  return (
    <PersonalInfoBox>
      <PersonalInfoHeader>
        <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
      </PersonalInfoHeader>
      <ChangeProfilePhoto />
    </PersonalInfoBox>
  );
};

export default PersonalInfo;
