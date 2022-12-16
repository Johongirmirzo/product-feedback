import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = () => {
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.username);
  useEffect(() => {
    if (username) {
      navigate("/");
    }
  }, []);

  console.log(username);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
