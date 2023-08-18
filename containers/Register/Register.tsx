import { Box, Button, Stack, Typography, styled, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

import { auth } from "@/firebase/firebase-config";

import { Link } from "@/components";
import { FormControl as FormInput } from "@/compositions";
import { ROUTES } from "@/routers";
import { updateProfile } from "firebase/auth";
import { defaultValue } from "@/yups/register/defaultValue";
import { Register as YupRegister } from "@/yups/register/register";

const Register = () => {
  const { control, handleSubmit, reset } = useForm({
    resolver: YupRegister,
    defaultValues: defaultValue,
  });
  const theme = useTheme();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const onSubmit = async (data: any) => {
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile(auth?.currentUser as any, {
        displayName: data.fullname,
      });
      reset()
      toast.success("Đăng ký thành công");
    } catch (error) {
      toast.error("Đăng ký thất bại");
    }
  };

  return (
    <Container>
      <ToastContainer theme="colored" />
      <Box className={"form-control"} component={"form"}>
        <Typography variant={"netflixtitle1"} className="form-heading">
          Đăng kí
        </Typography>

        <FormInput
          control={control}
          name="fullname"
          placeholder="Họ và tên"
          InputProps={{
            sx: {
              ...theme.typography.netflixtitle5,
              backgroundColor: "#333333",
            },
          }}
        />

        <FormInput
          control={control}
          name="email"
          placeholder="Email"
          InputProps={{
            sx: {
              ...theme.typography.netflixtitle5,
              backgroundColor: "#333333",
            },
          }}
        />

        <FormInput
          control={control}
          name="password"
          placeholder="Mật khẩu"
          InputProps={{
            type: "password",
            sx: {
              ...theme.typography.netflixtitle5,
              backgroundColor: "#333333",
            },
          }}
        />
        <FormInput
          control={control}
          name="confirm_password"
          placeholder="Nhập lại mật khẩu"
          InputProps={{
            type: "password",
            sx: {
              ...theme.typography.netflixtitle5,
              backgroundColor: "#333333",
            },
          }}
        />

        <Button
          variant={"contained"}
          className={"btn-submit"}
          fullWidth
          color="inherit"
          onClick={handleSubmit(onSubmit)}
        >
          <Typography variant={"netflixtitle4"}>Đăng kí</Typography>
        </Button>

        <Typography textAlign={"center"} color={"#B3B3B3"}>
          Bạn đã có tài khoản?{" "}
          <Link
            href={ROUTES.login}
            variant={"netflixtitle4"}
            color={theme.palette.common.white}
            underline={"hover"}
          >
            Đăng nhập
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
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/59fd5bf8-0338-47a5-abb2-c78d169fcd8f/VN-vi-20230515-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,

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
        color: theme.palette.common.white,
      },

      ["& .btn-submit"]: {
        padding: 16,
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        color: theme.palette.common.white,

        backgroundColor: "#e50914",

        [":hover"]: {
          opadcity: "0.9",
          transition: "opacity linear 0.2s",
        },
      },
    },
  };
});

export default Register;