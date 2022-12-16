import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SidebarRowLink = styled(NavLink)`
  display: block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #225299;
  font-weight: 400;
  &.active {
    font-weight: bold;
  }
`;

export { SidebarRowLink };
