import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { BsPencilFill } from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { editFeedback } from "../../redux/reducers/feedback";
import {
  EditFeedbackFormBox,
  EditFeedbackFormCircle,
  EditFeedbackFormTitle,
  EditFeedbackFormCon,
  EditFeedbackFormControl,
  EditFeedbackFormLabel,
  EditFeedbackFormInput,
  EditFeedbackFormSelect,
  EditFeedbackTextArea,
  EditFeedbackFormBtn,
  EditFeedbackFormFieldError,
  EditFeedbackFormAlert,
  EditFeedbackFormAlertText,
  EditFeedbackFormAlertCancelBtn,
} from "./EditFeedbackForm.styled";
import { feedbackSchema } from "../../schemas/feedbackSchema";
import { editFeedback as updateFeedback } from "../../api/feedback";
import { FeedbackInterface } from "../../types/feedback";

const EditFeedbackForm = () => {
  const { feedbackId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);
  const { accessToken, refreshToken } = useSelector(
    (state: RootState) => state.user
  );
  const [feedback, setFeedback] = useState({} as FeedbackInterface);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFeedback(feedbacks.filter((feedback) => feedback._id === feedbackId)[0]);
  }, [feedbackId, feedbacks]);

  return feedbackId && feedback && Object.keys(feedback).length > 0 ? (
    <EditFeedbackFormBox>
      <EditFeedbackFormCircle>
        <BsPencilFill />
      </EditFeedbackFormCircle>
      <EditFeedbackFormTitle>Edit Feedback</EditFeedbackFormTitle>
      <Formik
        initialValues={{
          title: feedback?.title || "",
          description: feedback?.description || "",
          category: feedback?.category || "",
        }}
        validationSchema={feedbackSchema}
        onSubmit={async (feedbackData) => {
          try {
            setIsLoading(true);
            const response = await updateFeedback(
              feedbackData,
              feedbackId,
              accessToken,
              refreshToken
            );
            setIsLoading(false);
            console.log(response.data);
            dispatch(editFeedback({ ...response.data.feedback, feedbackId }));
            navigate(`/feedback/${feedbackId}`);
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
          <EditFeedbackFormCon onSubmit={handleSubmit}>
            <EditFeedbackFormControl>
              <EditFeedbackFormLabel htmlFor="title">
                Product Title
              </EditFeedbackFormLabel>
              <EditFeedbackFormInput
                type="text"
                name="title"
                id="title"
                placeholder="Product Title"
                onChange={handleChange}
                value={values.title}
              />
              {errors.title && touched.title ? (
                <EditFeedbackFormFieldError>
                  {errors.title}
                </EditFeedbackFormFieldError>
              ) : null}
            </EditFeedbackFormControl>
            <EditFeedbackFormControl>
              <EditFeedbackFormLabel htmlFor="category">
                Category
              </EditFeedbackFormLabel>
              <EditFeedbackFormSelect
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
              </EditFeedbackFormSelect>
              {errors.category && touched.category ? (
                <EditFeedbackFormFieldError>
                  {errors.category}
                </EditFeedbackFormFieldError>
              ) : null}
            </EditFeedbackFormControl>
            <EditFeedbackFormControl>
              <EditFeedbackFormLabel htmlFor="description">
                Product Description
              </EditFeedbackFormLabel>
              <EditFeedbackTextArea
                onChange={handleChange}
                value={values.description}
                name="description"
                id="description"
                placeholder="Feedback description"
              ></EditFeedbackTextArea>
              {errors.description && touched.description ? (
                <EditFeedbackFormFieldError>
                  {errors.description}
                </EditFeedbackFormFieldError>
              ) : null}
            </EditFeedbackFormControl>
            <EditFeedbackFormBtn
              type="submit"
              isLoading={isLoading ? true : false}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Editing Feedback..." : "Edit Feedback"}
            </EditFeedbackFormBtn>
          </EditFeedbackFormCon>
        )}
      </Formik>
    </EditFeedbackFormBox>
  ) : (
    <h1>Loading...</h1>
  );
};

export default EditFeedbackForm;
