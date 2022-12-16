import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  NotFoundBox,
  NotFoundImgWrapper,
  NotFoundImg,
  NotFoundTitle,
  NotFoundDescription,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundBox>
      <NotFoundImgWrapper>
        <NotFoundImg
          src="https://daily-sleep-tracker.netlify.app/static/media/%E2%80%94Pngtree%E2%80%94cartoon%20hand%20drawn%20404%20error_5391390.3984c38a3fa5615b1ade.png"
          alt="not  found image"
        />
      </NotFoundImgWrapper>
      <NotFoundTitle>You visited unexisting page!</NotFoundTitle>
      <NotFoundDescription>
        Current page does not exist, go back to{" "}
        <Link to="/" style={{ color: "#0f68b7" }}>
          HOME
        </Link>{" "}
        page
      </NotFoundDescription>
    </NotFoundBox>
  );
};

export default NotFound;
