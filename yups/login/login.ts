import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LOGINSCHEMA = object({
  email: string().email().required("Trường này bắt buộc nhập"),
  password: string().required("Trường này bắt buộc nhập"),
});

export const Login = yupResolver(LOGINSCHEMA);
