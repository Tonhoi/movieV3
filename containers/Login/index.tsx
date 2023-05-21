import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { Link, Spacing } from "@/components";
import { FormControl } from "@/compositions";
import FormControlForCheckbox from "@/compositions/FormControl/FormControlForCheckbox";

const Login = () => {
  const { control } = useForm();
  const theme = useTheme();
  console.log(theme);
  return (
    <StyledWrapper>
      <StyledOverlay />

      <StyledFormBlock>
        <Grid container>
          <Grid item lg={12} md={12} xs={12}>
            <Typography variant={"netflixtitle1"}>Sign In </Typography>
            <Spacing spacing={1} />
          </Grid>

          <Grid item lg={12} md={12} xs={12}>
            <FormControl
              control={control}
              name={"email"}
              placeholder="Email or phone number"
              FormControlProps={{
                sx: {
                  width: "100%",
                },
              }}
              InputProps={{
                sx: {
                  ...theme.typography.netflixtitle5,
                  color: theme.palette.common.white,
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
              placeholder={"Password"}
              FormControlProps={{
                sx: {
                  width: "100%",
                },
              }}
              InputProps={{
                sx: {
                  ...theme.typography.netflixtitle5,
                  color: theme.palette.common.white,
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
              <Typography variant={"netflixtitle4"} textTransform={"capitalize"}>
                Sign In
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
                      label={
                        <Typography variant="netflixtitle3" color={"#b3b3b3"}>
                          Remember me
                        </Typography>
                      }
                    />
                  )}
                </FormControlForCheckbox>
              </Stack>
              <Link href={"/tro-giup"}>
                <Typography color={"#b3b3b3"} variant="netflixtitle3">
                  Need help?
                </Typography>
              </Link>
            </Stack>
          </Grid>

          <Grid item lg={12} md={12} xs={12}>
            <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
              <Typography variant="netflixtitle2" color={"#737373"}>
                New to Netflix?
              </Typography>
              <Link href={"/register"}>
                <Typography color={theme.palette.common.white} variant={"netflixtitle2"}>
                  Sign up now
                </Typography>
              </Link>
            </Stack>
          </Grid>
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

const StyledFormBlock = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    zIndex: 2,

    width: "100%",
    maxWidth: 450,
    padding: "60px 68px 40px",

    backgroundColor: "rgba(0,0,0,.75)",
    color: theme.palette.common.white,
  };
});

const StyledButton = styled(Button)(() => {
  return {
    padding: 16,

    backgroundColor: "#e50914",

    ":hover": {
      backgroundColor: "#e50914",
      opadcity: "0.8",
      transition: "opacity linear 0.2s",
    },
  };
});

const StyledOverlay = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };
});

export default Login;
