import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const REGISTERSCHEMA = object({
  fullname: string().required("Trường này bắt buộc nhập"),
  email: string().email().required("Trường này bắt buộc nhập"),
  password: string().required("Trường này bắt buộc nhập"),
  confirm_password: string()
    .required("Trường này bắt buộc nhập")
    .oneOf([ref("password")], "2 mật khẩu không trùng nhau"),
});

export interface RegisterProps {
  fullname: string;
  email: string;
  password: string;
  confirm_password: string;
}

export const Register = yupResolver(REGISTERSCHEMA);
