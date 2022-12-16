import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = () => {
  const navigate = useNavigate();
  const username = useSelector((state: RootState) => state.user.username);
  useEffect(() => {
    if (username) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
