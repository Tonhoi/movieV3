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

import { Link } from "@/components";
import { FormControl as FormInput } from "@/compositions";

const Login = () => {
  const { control } = useForm();
  const theme = useTheme();

  return (
    <Container>
      <Box className={"form-control"} component={"form"}>
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
          }}
        />

        <Button variant={"contained"} className={"btn-submit"} fullWidth color="inherit">
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
            href={"dang-ky"}
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
      width: "100%",
      maxWidth: 450,
      backgroundColor: "rgba(0,0,0,.75)",
      padding: "60px 68px 40px",
      borderRadius: 4,

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
