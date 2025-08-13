import * as yup from "yup";
export const AuthValidtion = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password length should be 6 character"),
});
