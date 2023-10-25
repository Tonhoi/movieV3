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
import { useRouter } from "next/router";

import { ROUTES } from "@/routers";
import { Link, FormControl as FormInput } from "@/components/common";
import { auth } from "@/firebase/firebase-config";
import { Login as YupLogin, LoginProps } from "@/yups/login/login";
import { defaultValue } from "@/yups/login/defaultValue";
import backdrop from "@/public/image/backdrop_login_register_page.jpg";

const Login = () => {
  const { control, handleSubmit } = useForm({
    resolver: YupLogin,
    defaultValues: defaultValue,
  });
  const theme = useTheme();
  const router = useRouter();

  const onSubmit = async (data: LoginProps) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Đăng Nhập thành công");
      router.push(ROUTES.home);
    } catch (error) {
      toast.error("Đăng Nhập thất bại. Tài khoản hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <Container>
      <ToastContainer theme="colored" />

      <Box component={"form"} className={"form-control"}>
        <Typography variant={"netflixtitle1"} className="form-heading">
          Đăng nhập
        </Typography>

        <FormInput control={control} name="email" placeholder="Email" />

        <FormInput
          control={control}
          name="password"
          placeholder="Mật khẩu"
          InputProps={{
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
            color={"#fff"}
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

      ["& .form-options"]: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(3),

        ["& .form-checbox"]: {
          color: "#B3B3B3",
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

export default Login;
