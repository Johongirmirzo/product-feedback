import React from "react";
import { BiHome } from "react-icons/bi";
import AddFeedbackForm from "../../components/AddFeedbackForm/AddFeedbackForm";
import { AddFeedbackBox, AddFeedbackLink } from "./AddFeedback.styled";

const AddFeedback = () => {
  return (
    <AddFeedbackBox>
      <AddFeedbackLink to="/">
        <BiHome />
        Go Back
      </AddFeedbackLink>
      <AddFeedbackForm />
    </AddFeedbackBox>
  );
};

export default AddFeedback;
