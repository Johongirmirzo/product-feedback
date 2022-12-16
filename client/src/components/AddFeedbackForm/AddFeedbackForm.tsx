import React, { useState } from "react";
import { Formik } from "formik";
import { Progress } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { createFeedback } from "../../redux/reducers/feedback";
import {
  AddFeedbackFormBox,
  AddFeedbackFormCircle,
  AddFeedbackFormTitle,
  AddFeedbackFormSelect,
  AddFeedbackFormCon,
  AddFeedbackFormControl,
  AddFeedbackFormLabel,
  AddFeedbackFormInput,
  AddFeedbackTextArea,
  AddFeedbackFormBtn,
  AddFeedbackFormFieldError,
  AddFeedbackFormAlert,
  AddFeedbackFormAlertText,
  AddFeedbackFormAlertCancelBtn,
} from "./AddFeedbackForm.styled";
import { feedbackSchema } from "../../schemas/feedbackSchema";
import { createFeedback as postFeedback } from "../../api/feedback";

const AddFeedbackForm = () => {
  const {
    id: userId,
    accessToken,
    refreshToken,
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AddFeedbackFormBox>
      <AddFeedbackFormCircle>
        <AiOutlinePlus />
      </AddFeedbackFormCircle>
      <AddFeedbackFormTitle>Create New Feedback</AddFeedbackFormTitle>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: "",
        }}
        validationSchema={feedbackSchema}
        onSubmit={async (feedbackData) => {
          try {
            setIsLoading(true);
            const response = await postFeedback(
              { ...feedbackData, user: userId },
              accessToken,
              refreshToken
            );
            setIsLoading(false);
            dispatch(
              createFeedback({ ...response.data.feedback, user: userId })
            );
            navigate("/");
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          handleChange,
          values,
        }) => (
          <AddFeedbackFormCon onSubmit={handleSubmit}>
            <AddFeedbackFormControl>
              <AddFeedbackFormLabel htmlFor="title">
                Feedback Title
              </AddFeedbackFormLabel>
              <AddFeedbackFormInput
                type="text"
                name="title"
                id="title"
                placeholder="Product Title"
                onChange={handleChange}
                value={values.title}
              />
              {errors.title && touched.title ? (
                <AddFeedbackFormFieldError>
                  {errors.title}
                </AddFeedbackFormFieldError>
              ) : null}
            </AddFeedbackFormControl>
            <AddFeedbackFormControl>
              <AddFeedbackFormLabel htmlFor="category">
                Category
              </AddFeedbackFormLabel>
              <AddFeedbackFormSelect
                onChange={handleChange}
                value={values.category}
                name="category"
                id="category"
              >
                <option value=""></option>
                <option value="FEATURE">Feature</option>
                <option value="ENHANCEMENT">Enhancement</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
                <option value="BUG">Bug</option>
              </AddFeedbackFormSelect>
              {errors.category && touched.category ? (
                <AddFeedbackFormFieldError>
                  {errors.category}
                </AddFeedbackFormFieldError>
              ) : null}
            </AddFeedbackFormControl>
            <AddFeedbackFormControl>
              <AddFeedbackFormLabel htmlFor="description">
                Feedback Description
              </AddFeedbackFormLabel>
              <AddFeedbackTextArea
                onChange={handleChange}
                value={values.description}
                name="description"
                id="description"
                placeholder="Feedback description"
              ></AddFeedbackTextArea>
              {errors.description && touched.description ? (
                <AddFeedbackFormFieldError>
                  {errors.description}
                </AddFeedbackFormFieldError>
              ) : null}
            </AddFeedbackFormControl>
            <AddFeedbackFormBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Creating Feedback..." : "Create Feedback"}
            </AddFeedbackFormBtn>
          </AddFeedbackFormCon>
        )}
      </Formik>
    </AddFeedbackFormBox>
  );
};

export default AddFeedbackForm;
