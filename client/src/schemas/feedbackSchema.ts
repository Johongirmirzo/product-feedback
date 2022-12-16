import {object, string} from "yup";

export const feedbackSchema = object({
    title: string()
    .required("Feedback title can't be empty")
    .min(5, "Minimum allowed characters are 5")
    .max(80, "Maximum allowed characters are 80"),
    description: string()
    .required("Feedback description can't be empty")
    .min(25, "Minimum allowed characters are 25")
    .max(250, "Maximum allowed characters are 250"),
    category: string()
    .required("Feedback category can't be empty")
    
})