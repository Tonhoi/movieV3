import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { Link, FormControl as FormInput } from "@/components/common";
import { Login as YupLogin, LoginProps } from "@/yups/login/login";
import { defaultValue } from "@/yups/login/defaultValue";
import { ROUTES } from "@/routers";
import { auth } from "@/firebase/firebase-config";

const LoginForm = () => {
  const router = useRouter();

  const { control, handleSubmit } = useForm({
    resolver: YupLogin,
    defaultValues: defaultValue,
  });

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
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .form-options"]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: theme.spacing(3),

      ["& .form-checbox"]: {
        color: "#B3B3B3",
      },
    },
  };
});

export default LoginForm;
