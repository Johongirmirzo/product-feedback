import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { storeFeedback } from "../../redux/reducers/feedback";
import Sidebar from "./Sidebar/Sidebar";
import { HomeBox } from "./Home.styled";
import { getAllFeedbacks } from "../../api/feedback";
import {
  ErrorBoundaryBox,
  ErrorBoundaryTextBox,
  ErrorBoundaryHeader,
  ErrorBoundaryTitle,
  ErrorBoundaryDescription,
  ErrorBoundaryBtn,
} from "../../components/ErrorBoundary/ErrorBoundary.styled";
import MainArea from "./MainArea/MainArea";

const Home = () => {
  const navigate = useNavigate();
  const { username, accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, []);
  
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getAllFeedbacks(accessToken, refreshToken);
        setIsLoading(false);
        dispatch(storeFeedback(response.data));
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    })();
  }, []);

  return (
    <HomeBox>
      <Sidebar />
      <Outlet context={[isLoading]} />
    </HomeBox>
  );
};

export default Home;
