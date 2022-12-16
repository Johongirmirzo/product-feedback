import React from "react";
import { SidebarRowLink } from "./SidebarRow.styled";

type SidebarRowProps = {
  children: React.ReactNode;
  route: string;
};
const SidebarRow = ({ children, route }: SidebarRowProps) => {
  return <SidebarRowLink to={route}>{children}</SidebarRowLink>;
};

export default SidebarRow;
