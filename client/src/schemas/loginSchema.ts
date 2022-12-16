import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .required("Email can't be empty")
    .email("Email must include @")
    .min(2, "Minimum character length is 2")
    .max(60, "Maximum character length is 60"),
  password: string()
    .required("Password can't be empty")
    .min(6, "Minimum password length is 6")
    .max(60, "Maximum password length is 60")
});