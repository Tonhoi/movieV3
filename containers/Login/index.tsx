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
import Overlay from "@/components/Overlay";

const Login = () => {
  const { control } = useForm();
  const theme = useTheme();

  return (
    <StyledWrapper>
      <Overlay backgroundColor="rgba(0, 0, 0, 0.4)" />

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
            <StyledStackWrapper>
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

              <Link href={"/tro-giup"}>
                <Typography color={"#b3b3b3"} variant="netflixtitle3">
                  Need help?
                </Typography>
              </Link>
            </StyledStackWrapper>
          </Grid>

          <Grid item lg={12} md={12} xs={12}>
            <Typography
              marginRight={theme.spacing(1)}
              variant="netflixtitle2"
              color={"#737373"}
            >
              New to Netflix?
            </Typography>

            <Link href={"/register"}>
              <Typography color={theme.palette.common.white} variant={"netflixtitle2"}>
                Sign up now
              </Typography>
            </Link>
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

    width: 450,
    maxWidth: "calc(100% - 24px)",
    padding: "60px 68px 40px",

    backgroundColor: "rgba(0,0,0,.75)",
    color: theme.palette.common.white,

    [theme.breakpoints.down("sm")]: {
      padding: "60px 40px 40px",
    },
  };
});

const StyledButton = styled(Button)(() => {
  return {
    padding: 16,

    backgroundColor: "#e50914",

    ":hover": {
      opadcity: "0.8",
      transition: "opacity linear 0.2s",

      backgroundColor: "#e50914",
    },
  };
});

const StyledStackWrapper = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

export default Login;
