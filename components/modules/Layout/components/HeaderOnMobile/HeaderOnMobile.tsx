import { MouseEvent, memo, useCallback, useMemo } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { auth } from "@/firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

import { Image, Link } from "@/components/common";
import { NAVITEM } from "@/components/modules";
import { SETTING_THEME_TITLE } from "@/constants";
import { ROUTES } from "@/routers";

import avatar from "@/public/image/avatar.png";
import bgHeaderMobile from "@/public/image/backgroundAvatar.png";
import { useDarkModeContext } from "@/contexts/ThemeProvider/ThemeProvider";

interface HeaderOnMobileProps {
  handleCloseHeaderMobile: () => void;
  isOpenHeaderMobile: boolean;
}

const HeaderOnMobile = (props: HeaderOnMobileProps) => {
  const { handleCloseHeaderMobile, isOpenHeaderMobile } = props;

  const [user] = useAuthState(auth);
  const { isDarkTheme, handleChangeTheme } = useDarkModeContext();
  const { asPath } = useRouter();

  const handleLogoutAccount = () => {
    signOut(auth);
    handleCloseHeaderMobile();
  };

  const handleClickNavItem = useCallback(
    (e: MouseEvent<HTMLDivElement>, is_login_button: boolean, href: string) => {
      if (user && is_login_button) return handleLogoutAccount();
      if (href) return handleCloseHeaderMobile();

      handleChangeTheme(e);

      handleCloseHeaderMobile();
    },
    [isDarkTheme, user]
  );

  const renderNavItem = useMemo(() => {
    return NAVITEM.map((el: any) => {
      let checkIsTypeDarkMode = el.title;

      if (el.type === "dark_mode" && isDarkTheme) {
        checkIsTypeDarkMode = SETTING_THEME_TITLE.light;
      } else if (el.type === "dark_mode" && !isDarkTheme) {
        checkIsTypeDarkMode = SETTING_THEME_TITLE.dark;
      }

      if (!user && (el.href === ROUTES.account || el.is_login_button)) return null;

      return (
        <Button
          key={el.id}
          href={el.href}
          LinkComponent={el.href ? Link : Button}
          startIcon={el.start_icon && <el.start_icon className="icon" />}
          disableRipple
          onClick={(e) => handleClickNavItem(e as any, el.is_login_button, el.href)}
          className={`nav-mobile-list ${asPath.includes(el.href) ? "active" : ""} ${
            el.divider ? "divider" : ""
          }`}
        >
          <Typography variant={"body1"} className={`title`}>
            {checkIsTypeDarkMode}
          </Typography>
        </Button>
      );
    });
  }, [isDarkTheme, user, asPath]);

  return (
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

      {renderNavItem}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1001,
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
      color: "#fff",

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
    },

    ["& .nav-mobile-list"]: {
      position: "relative",
      padding: "12px 12px 12px 24px",
      textTransform: "capitalize",
      justifyContent: "start",
      color: theme.palette.text_color.main,
      width: "100%",

      ["&.divider"]: {
        borderBottom: "1px solid #6d7485",
        marginBottom: theme.spacing(1),
      },

      ["&.active :where(.title, .MuiButton-startIcon)"]: {
        color: "#1cc749",
      },

      ["&:hover"]: {
        color: "#1cc749",
        opacity: 1,
      },
    },
  };
});

export default memo(HeaderOnMobile);
