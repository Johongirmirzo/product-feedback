import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import FeedbackItem from "../../components/FeedbackList/FeedbackItem/FeedbackItem";

import {
  RoadmapBox,
  RoadmapBoxHeader,
  RoadmapHeaderTitle,
  RoadmapLeft,
  RoadmapRight,
  RoadmapBtn,
  RoadmapStatusSwitcherBox,
  RoadmapStatusSwitcherList,
  RoadmapStatusSwitcherItem,
  RoadmapFlexContainer,
  RoadmapFeedbackBox,
  RoadmapHeader,
  RoadmapTitle,
  RoadmapDescription,
} from "./Roadmap.styled";
import { FeedbackInterface } from "../../types/feedback";

const statuses = ["planned", "in-progress", "live"];

const Roadmap = () => {
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeStatus, setActiveStatus] = useState("");

  useEffect(() => {
    const updateScreenSize = (e: any) => {
      if (e.target.innerWidth <= 562) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
        setActiveStatus("");
      }
    };
    if (window.innerWidth <= 562) {
      setIsSmallScreen(true);
    }

    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const getFeedbackStatusAmount = (status: string) => {
    return feedbacks.filter(
      (feedback: FeedbackInterface) =>
        feedback.status.toLowerCase() === status.toLowerCase()
    );
  };
  const updateActiveStatus = (status: string) => {
    switch (status) {
      case "planned":
        setActiveStatus("planned");
        break;
      case "in-progress":
        setActiveStatus("in-progress");
        break;
      case "live":
        setActiveStatus("live");
        break;
    }
  };

  return (
    <RoadmapBox>
      <RoadmapBoxHeader>
        <RoadmapLeft>
          <Link to="/">
            <BiHome />
            Go Back
          </Link>
          <RoadmapHeaderTitle>Roadmap</RoadmapHeaderTitle>
        </RoadmapLeft>
        <RoadmapRight>
          <Link to="/addFeedback">
            <RoadmapBtn>+ Add Feedback</RoadmapBtn>
          </Link>
        </RoadmapRight>
      </RoadmapBoxHeader>
      {isSmallScreen && (
        <RoadmapStatusSwitcherBox>
          <RoadmapStatusSwitcherList>
            <RoadmapStatusSwitcherItem
              onClick={updateActiveStatus.bind(null, "planned")}
              className={activeStatus === "planned" ? "planned" : ""}
            >
              Planned ({getFeedbackStatusAmount("planned").length})
            </RoadmapStatusSwitcherItem>
            <RoadmapStatusSwitcherItem
              onClick={updateActiveStatus.bind(null, "in-progress")}
              className={activeStatus === "in-progress" ? "in-progress" : ""}
            >
              InProgress({getFeedbackStatusAmount("in-progress").length})
            </RoadmapStatusSwitcherItem>
            <RoadmapStatusSwitcherItem
              onClick={updateActiveStatus.bind(null, "live")}
              className={activeStatus === "live" ? "live" : ""}
            >
              Live ({getFeedbackStatusAmount("live").length})
            </RoadmapStatusSwitcherItem>
          </RoadmapStatusSwitcherList>
        </RoadmapStatusSwitcherBox>
      )}
      <RoadmapFlexContainer>
        {statuses
          .filter((status) => (activeStatus ? status === activeStatus : true))
          .map((status, index) => (
            <RoadmapFeedbackBox key={index}>
              <RoadmapHeader>
                <RoadmapTitle>
                  {status === "in-progress"
                    ? `In-Progress (${
                        getFeedbackStatusAmount("in-progress").length
                      })`
                    : status === "planned"
                    ? `Planned (${getFeedbackStatusAmount("planned").length})`
                    : status === "live"
                    ? `Live (${getFeedbackStatusAmount("live").length})`
                    : ""}
                </RoadmapTitle>
                <RoadmapDescription>
                  {status === "in-progress"
                    ? "Features currently being developed"
                    : status === "planned"
                    ? "Ideas priotirized for research"
                    : status === "live"
                    ? "Released features"
                    : ""}
                </RoadmapDescription>
              </RoadmapHeader>
              {getFeedbackStatusAmount(status).map((feedback, index) => (
                <FeedbackItem key={index} feedback={feedback} status={status} />
              ))}
            </RoadmapFeedbackBox>
          ))}
      </RoadmapFlexContainer>
    </RoadmapBox>
  );
};

export default Roadmap;
