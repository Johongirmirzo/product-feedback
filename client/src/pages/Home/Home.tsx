import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { storeFeedback } from "../../redux/reducers/feedback";
import { storeComments } from "../../redux/reducers/comment";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import MainArea from "./MainArea/MainArea";
import { HomeContainer } from "./Home.styled";
import { getAllFeedbacks } from "../../api/feedback";
import { getAllComments } from "../../api/comment";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username, accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  const [isHomePage, setIsHomePage] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const commentResponse = await getAllComments(accessToken, refreshToken);
        const feedbackResponse = await getAllFeedbacks(
          accessToken,
          refreshToken
        );
        setIsLoading(false);
        dispatch(storeFeedback([...feedbackResponse.data]));
        dispatch(storeComments({ comments: commentResponse.data }));
      } catch (err) {
        setIsLoading(false);
        console.error(err);
      }
    })();
  }, []);

  const getActiveCategory = (category: string) => setActiveCategory(category);

  console.log(process.env);
  return (
    <>
      <Navbar />
      {isHomePage ? (
        <HomeContainer>
          <Sidebar getActiveCategory={getActiveCategory} />
          <MainArea activeCategory={activeCategory} isLoading={isLoading} />
        </HomeContainer>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default Home;
