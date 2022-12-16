import React from "react";
import { BiHome } from "react-icons/bi";
import EditFeedbackForm from "../../components/EditFeedbackForm/EditFeedbackForm";
import { EditFeedbackBox, EditFeedbackLink } from "./EditFeedback.styled";

const EditFeedback = () => {
  return (
    <EditFeedbackBox>
      <EditFeedbackLink to="/">
        <BiHome />
        Go Back
      </EditFeedbackLink>
      <EditFeedbackForm />
    </EditFeedbackBox>
  );
};

export default EditFeedback;
