import React from "react";
import SidebarBanner from "./SidebarBanner/SidebarBanner";
import SidebarCategories from "./SidebarCategories/SidebarCategories";
import SidebarStatuses from "./SidebarStatuses/SidebarStatuses";
import { SidebarBox } from "./Sidebar.styled";

type SidebarProps = {
  getActiveCategory: (category: string) => void;
};
const Sidebar = ({ getActiveCategory }: SidebarProps) => {
  return (
    <SidebarBox>
      <SidebarBanner />
      <SidebarCategories getActiveCategory={getActiveCategory} />
      <SidebarStatuses />
    </SidebarBox>
  );
};

export default Sidebar;
