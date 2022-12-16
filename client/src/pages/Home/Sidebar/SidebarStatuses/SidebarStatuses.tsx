import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../redux/store";
import {
  SidebarStatusesBox,
  SidebarStatusesHeader,
  SidebarStatusesTitle,
  SidebarStatusesLink,
  SidebarStatusesList,
  SidebarStatusesItem,
} from "./SidebarStatuses.styled";

const SidebarStatuses = () => {
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);

  const getTotalAmount = (statusType: string) => {
    return feedbacks.filter(
      (feedback) => feedback.status.toLowerCase() === statusType
    ).length;
  };
  return (
    <SidebarStatusesBox>
      <SidebarStatusesHeader>
        <SidebarStatusesTitle>Roadmap</SidebarStatusesTitle>
        <SidebarStatusesLink>
          <Link to="/roadmap">View</Link>
        </SidebarStatusesLink>
      </SidebarStatusesHeader>
      <SidebarStatusesList>
        <SidebarStatusesItem className="planned">
          <p>Planned</p>
          <p>{getTotalAmount("planned")}</p>
        </SidebarStatusesItem>
        <SidebarStatusesItem className="in-progress">
          <p>In-Progress</p>
          <p>{getTotalAmount("in-progress")}</p>
        </SidebarStatusesItem>
        <SidebarStatusesItem className="live">
          <p>Live</p>
          <p>{getTotalAmount("live")}</p>
        </SidebarStatusesItem>
      </SidebarStatusesList>
    </SidebarStatusesBox>
  );
};

export default SidebarStatuses;
