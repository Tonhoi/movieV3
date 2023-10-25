import { Fragment, MouseEvent, useCallback } from "react";
import { Box, Button, Divider, Typography, styled, useTheme } from "@mui/material";
import { auth } from "@/firebase/firebase-config";
import { User, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Hamburger from "hamburger-react";

import { Image, Link, Overlay } from "@/components/common";
import { NAVITEM } from "@/components/modules";
import { SETTING_THEME_TITLE } from "@/constants";
import { useToggle } from "@/hooks";
import { ROUTES } from "@/routers";

import avatar from "@/public/image/avatar2.png";
import bgHeaderMobile from "@/public/image/backgroundAvatar.png";
import { useDarkModeContext } from "@/contexts/ThemeProvider/ThemeProvider";

const HeaderOnMobile = () => {
  const theme = useTheme();
  const [user] = useAuthState(auth);
  const { setIsDarkTheme, isDarkTheme } = useDarkModeContext();

  const {
    on: isOpenHeaderMobile,
    toggleOff: handleCloseHeaderMobile,
    toggle: toggleHeaderMobile,
  } = useToggle();

  const handleLogoutAccount = () => {
    signOut(auth);
    handleCloseHeaderMobile();
  };

  const handleClickNavItem = useCallback(
    (
      e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
      user: User | null | undefined,
      is_login_button: boolean,
      type: string
    ) => {
      if (user && is_login_button) return handleLogoutAccount();

      if (type == "dark_mode") {
        setIsDarkTheme((prev: boolean) => !prev);

        const check = !isDarkTheme;

        localStorage.setItem("isDarkTheme", `${check}`);

        const btnTextElement = e.currentTarget.querySelector(".nav-title");

        if (!btnTextElement) return null;

        if (isDarkTheme) {
          btnTextElement.textContent = SETTING_THEME_TITLE.dark;
        } else {
          btnTextElement.textContent = SETTING_THEME_TITLE.light;
        }
      }

      handleCloseHeaderMobile();
    },
    [isDarkTheme]
  );

  return (
    <Fragment>
      <Hamburger
        toggled={isOpenHeaderMobile}
        toggle={toggleHeaderMobile}
        color={theme.palette.common.black}
      />

      <Overlay
        backgroundColor="dark_50"
        onClick={handleCloseHeaderMobile}
        className={isOpenHeaderMobile ? "active" : ""}
      />

      <Container className={isOpenHeaderMobile ? "active" : ""}>
        <Button
          LinkComponent={user ? Box : Link}
          href={ROUTES.login}
          disableRipple
          className={"heading"}
        >
          <Box className={"logo-on-mobile"}>
            <Image src={avatar.src} />
          </Box>

          <Typography variant={"body2"} className={"heading-title"}>
            {user ? user?.displayName : "Đăng nhập/Đăng ký"}
          </Typography>
        </Button>

        {NAVITEM.map((item: any, idx: number) => {
          const {
            href,
            start_icon: StartIcon,
            title,
            divider,
            is_login_button,
            type,
          } = item;

          if (!user && (href === ROUTES.account || is_login_button)) return null;
          return (
            <Box key={idx}>
              <Button
                href={href}
                LinkComponent={href ? Link : Button}
                startIcon={StartIcon && <StartIcon className="icon" />}
                disableRipple
                className={"nav-mobile-list"}
                onClick={(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
                  handleClickNavItem(e, user, is_login_button, type)
                }
              >
                <Typography variant={"body1"} className={"nav-title"}>
                  {title}
                </Typography>
              </Button>

              {divider && <Divider light className={"divider"} />}
            </Box>
          );
        })}
      </Container>
    </Fragment>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 99,
    transform: "translateX(-100%)",
    opacity: 0,
    transition: "all linear 0.2s",

    width: "100%",
    maxWidth: 270,
    background: theme.palette.mode == "light" ? "#fff" : "rgb(35, 37, 43)",

    ["&.active"]: {
      transform: "translateX(0)",
      opacity: 1,
    },

    ["& .heading"]: {
      position: "relative",
      backgroundImage: `url(${bgHeaderMobile.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      aspectRatio: "270 / 88",

      width: "100%",
      textTransform: "capitalize",
      padding: "22px 24px",
      justifyContent: "start",
      color: theme.palette.common.white,

      ["&:after"]: {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundImage:
          "linear-gradient(rgba(26, 28, 34, 0) 0%, rgba(26, 28, 34, 0.06) 6%, rgba(26, 28, 34, 0.12) 12%, rgba(26, 28, 34, 0.19) 19%, rgba(26, 28, 34, 0.26) 26%, rgba(26, 28, 34, 0.34) 34%, rgba(26, 28, 34, 0.42) 42%, rgba(26, 28, 34, 0.5) 50%, rgba(26, 28, 34, 0.58) 58%, rgba(26, 28, 34, 0.66) 66%, rgba(26, 28, 34, 0.74) 74%, rgba(26, 28, 34, 0.81) 81%, rgba(26, 28, 34, 0.88) 88%, rgba(26, 28, 34, 0.94) 94%, rgb(26, 28, 34) 100%)",
      },

      ["& .logo-on-mobile"]: {
        position: "relative",
        width: 40,
        height: 40,
        marginRight: 12,

        ["& img"]: {
          objectFit: "cover",
          borderRadius: "50%",
        },
      },

      ["& .heading-title"]: {
        color: "#fff",
      },
    },

    ["& .divider"]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      height: 1,
      backgroundColor: "#6d7485",
    },

    ["& .nav-mobile-list"]: {
      padding: "12px 12px 12px 24px",
      textTransform: "capitalize",
      justifyContent: "start",
      color: theme.palette.text_color.main,
      width: "100%",

      ["& .MuiButton-endIcon"]: {
        marginLeft: "auto",
      },

      ["&:hover"]: {
        color: "#1cc749",
        opacity: 1,
      },
    },
  };
});

export default HeaderOnMobile;
