import React from "react";
import {
  SidebarBannerBox,
  SidebarBannerTextBox,
  SidebarBannerTitle,
  SidebarBannerDescription,
} from "./SidebarBanner.styled";

const SidebarBanner = () => {
  return (
    <SidebarBannerBox>
      <SidebarBannerTextBox>
        <SidebarBannerTitle>Frontend Mentor</SidebarBannerTitle>
        <SidebarBannerDescription>Feedback Board</SidebarBannerDescription>
      </SidebarBannerTextBox>
    </SidebarBannerBox>
  );
};

export default SidebarBanner;
