import React from "react";
import SidebarLogo from "./Logo/Logo";
import AdminLogout from "./AdminLogout/AdminLogout";
import SidebarRow from "./SidebarRow/SidebarRow";
import { SidebarBox } from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarBox>
      <SidebarLogo />
      <AdminLogout />
      <SidebarRow route="/">Dashboard</SidebarRow>
      <SidebarRow route="/settings">Settings</SidebarRow>
    </SidebarBox>
  );
};

export default Sidebar;
