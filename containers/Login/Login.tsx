import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";
import { useRouter } from "next/router";

import { Link } from "@/components";
import { FormControl as FormInput } from "@/compositions";
import { ROUTES } from "@/routers";
import { defaultValue } from "@/yups/login/defaultValue";
import { Login as YupLogin } from "@/yups/login/login";

const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: YupLogin,
    defaultValues: defaultValue,
  });
  const theme = useTheme();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Đăng Nhập thành công");
      router.push(ROUTES.home);
    } catch (error) {
      toast.error("Đăng Nhập thất bại");
    }
  };

  return (
    <Container>
      <ToastContainer theme="colored" />

      <Box component={"form"} className={"form-control"}>
        <Typography variant={"netflixtitle1"} className="form-heading">
          Đăng nhập
        </Typography>

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
            sx: {
              ...theme.typography.netflixtitle5,
              backgroundColor: "#333333",
            },
            type: "password",
          }}
        />

        <Button
          variant={"contained"}
          className={"btn-submit"}
          fullWidth
          color="inherit"
          onClick={handleSubmit(onSubmit)}
        >
          <Typography variant={"netflixtitle4"}>Đăng nhập</Typography>
        </Button>

        <Stack className="form-options">
          <FormControlLabel
            control={<Checkbox defaultChecked color="success" />}
            label={<Typography variant={"netflixtitle3"}>Ghi nhớ tôi</Typography>}
            className="form-checbox"
            defaultChecked
          />

          <Link href={"tro-giup"}>
            <Typography variant={"netflixtitle3"} color={"#B3B3B3"}>
              Bạn cần trợ giúp
            </Typography>
          </Link>
        </Stack>

        <Typography textAlign={"center"} color={"#B3B3B3"}>
          Bạn chưa có tài khoản?{" "}
          <Link
            href={ROUTES.register}
            variant={"netflixtitle4"}
            color={theme.palette.common.white}
            underline={"hover"}
          >
            Đăng kí
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

      ["& .form-options"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(3),

        ["& .form-checbox"]: {
          color: "#B3B3B3",
        },
      },
    },
  };
});

export default Login;
