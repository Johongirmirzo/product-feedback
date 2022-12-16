import React from "react";

import Feedback from "./Feedback/Feedback";
import {
  MainAreaBox,
  MainAreaFeedback,
  MainAreaHeader,
  MainAreaTitle,
} from "./MainArea.styled";

const MainArea = () => {
  return (
    <MainAreaBox>
      <MainAreaFeedback>
        <MainAreaHeader>
          <MainAreaTitle>Feedback</MainAreaTitle>
          <Feedback />
        </MainAreaHeader>
      </MainAreaFeedback>
    </MainAreaBox>
  );
};

export default MainArea;
