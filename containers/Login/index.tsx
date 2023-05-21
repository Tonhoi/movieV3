import { Link, Spacing } from "@/components";
import { FormControl } from "@/compositions";
import FormControlForCheckbox from "@/compositions/FormControl/FormControlForCheckbox";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {
  const { control } = useForm();
  const theme = useTheme();
  console.log(theme);
  return (
    <StyledWrapper>
      <StyledFormBlock>
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <Typography variant={"h4"}>Đăng nhập</Typography>
            <Spacing spacing={3} />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <FormControl
              control={control}
              name={"email"}
              placeholder="Email hoặc số điện thoại"
              FormControlProps={{
                sx: {
                  width: "100%",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  padding: "9px 20px",
                  backgroundColor: "#333333",
                  borderRadius: "4px",
                },
              }}
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <FormControl
              control={control}
              name={"password"}
              placeholder="Mật khẩu"
              FormControlProps={{
                sx: {
                  width: "100%",
                },
              }}
              InputProps={{
                sx: {
                  color: "white",
                  padding: "9px 20px",
                  backgroundColor: "#333333",
                  borderRadius: "4px",
                },
              }}
            />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <Spacing spacing={4} />
            <StyledButton variant={"contained"} fullWidth>
              <Typography variant={"subtitle1"} fontWeight={700}>
                Đăng nhập
              </Typography>
            </StyledButton>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack direction={"row"} alignItems={"center"}>
                <FormControlForCheckbox control={control} name={"remember_password"}>
                  {() => (
                    <FormControlLabel
                      control={<Checkbox defaultChecked color="default" />}
                      label="Ghi nhớ tôi "
                    />
                  )}
                </FormControlForCheckbox>
              </Stack>
              <Link href={"/tro-giup"}>
                <Typography color={"white"}>cần trợ giúp?</Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"6px"}
              justifyContent={"center"}
            >
              <Typography variant="body1" color={"#737373"}>
                Bạn mới tham gia Netflix?
              </Typography>
              <Link href={"/register"}>
                <Typography color={"white"} variant={"body1"} fontWeight={700}>
                  Đăng ký ngay
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item lg={12} md={12} xs={12}></Grid>
        </Grid>
      </StyledFormBlock>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Stack)(() => {
  return {
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/59fd5bf8-0338-47a5-abb2-c78d169fcd8f/VN-vi-20230515-popsignuptwoweeks-perspective_alpha_website_medium.jpg)`,
  };
});

const StyledFormBlock = styled(Box)(() => {
  return {
    padding: "60px 68px 40px",
    width: "100%",
    maxWidth: "450px",
    backgroundColor: "rgba(0,0,0,.75)",
    color: "white",
  };
});

const StyledButton = styled(Button)(() => {
  return {
    padding: "12px 16px",
    backgroundColor: "#e50914",
    ":hover": {
      backgroundColor: "#e50914",
      opadcity: "0.6",
      transition: "opacity linear 0.2s",
    },
  };
});

export default Login;
