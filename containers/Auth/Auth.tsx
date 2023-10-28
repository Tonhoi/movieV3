import { Box, Stack, Typography, styled } from "@mui/material";
import { ToastContainer } from "react-toastify";

import { ROUTES } from "@/routers";
import { Link } from "@/components/common";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

import backdrop from "@/public/image/backdrop_login_register_page.jpg";

interface AuthProps {
  type: "login" | "register";
}

const Auth = ({ type }: AuthProps) => {
  return (
    <Container>
      <ToastContainer theme="colored" />

      <Box component={"form"} className={"form-control"}>
        <Typography variant={"netflixtitle1"} className="form-heading">
          Đăng {type == "login" ? "nhập" : "kí"}
        </Typography>

        {type === "login" ? <LoginForm /> : <RegisterForm />}

        <Typography textAlign={"center"} color={"#B3B3B3"}>
          Bạn {type === "login" ? "chưa" : "đã"} có tài khoản?{" "}
          <Link
            href={type === "login" ? ROUTES.register : ROUTES.login}
            variant={"netflixtitle4"}
            color={"#fff"}
            underline={"hover"}
          >
            Đăng {type === "login" ? "kí" : "nhập"}
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${backdrop.src})`,

    ["& .form-control"]: {
      width: 450,
      maxWidth: "calc(100% - 20px)",
      backgroundColor: "rgba(0,0,0,.75)",
      padding: "60px 68px 40px",
      borderRadius: 4,

      [theme.breakpoints.down("sm")]: {
        padding: "60px 40px 40px",
      },

      ["& .form-heading"]: {
        color: "#fff",
      },

      ["& .btn-submit"]: {
        padding: 16,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        color: "#fff",

        backgroundColor: "#e50914",

        [":hover"]: {
          opadcity: "0.9",
          transition: "opacity linear 0.2s",
        },
      },

      ["& .MuiFormControl-root .MuiInputBase-root"]: {
        ...theme.typography.netflixtitle5,
        backgroundColor: "#333333",

        ["&::before, &::after"]: {
          display: "none",
        },
      },
    },
  };
});

export default Auth;
