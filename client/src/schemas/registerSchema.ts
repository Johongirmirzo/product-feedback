import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string()
    .required("Username can't be empty")
    .min(2, "Minimum character length is 2")
    .max(25, "Maximum character length is 25"),
  email: string()
    .required("Email can't be empty")
    .min(2, "Minimum character length is 2")
    .max(25, "Maximum character length is 25")
    .email("Email must include @"),
  password: string()
    .required("Password can't be empty")
    .min(8, "Minimum password length is 8")
    .max(25, "Maximum password length is 25"),
  confirmPassword: string()
    .required("Confirm Password can't be empty")
    .oneOf([ref("password"), null], "Passwords must match")
    .min(8, "Minimum password length is 8")
    .max(25, "Maximum password length is 25")
});