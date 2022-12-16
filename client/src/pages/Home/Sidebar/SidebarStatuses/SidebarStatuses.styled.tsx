import styled from "styled-components";

const SidebarStatusesBox = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  padding: 15px;
  height: 210px;
  background: #f7f7f7;
`;
const SidebarStatusesHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SidebarStatusesTitle = styled.h2`
  color: #112;
`;
const SidebarStatusesLink = styled.p`
  & > * {
    color: #0088ff;
    font-weight: 600;
    font-size: 16px;
    text-underline-offset: 5px;
  }
`;
const SidebarStatusesList = styled.ul`
  margin-top: 25px;
`;
const SidebarStatusesItem = styled.li`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 18px;
  margin-left: 20px;
  list-style-type: ;
  & > *:first-child {
    color: #333;
  }
  & > *:last-child {
    font-size: 20px;
  }
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  &.planned::before {
    background: orange;
  }
  &.in-progress::before {
    background: purple;
  }
  &.live::before {
    background: #00b3ff;
  }
`;

export {
  SidebarStatusesBox,
  SidebarStatusesHeader,
  SidebarStatusesTitle,
  SidebarStatusesLink,
  SidebarStatusesList,
  SidebarStatusesItem,
};
