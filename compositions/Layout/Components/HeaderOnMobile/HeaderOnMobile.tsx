import { Fragment, MouseEventHandler } from "react";
import { Box, Divider, Typography, styled, useTheme } from "@mui/material";
import Hamburger from "hamburger-react";
import { auth } from "@/firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { Image, Link, Overlay } from "@/components";
import { NAVITEM } from "@/constant";
import { useToggle } from "@/hooks";
import { ROUTES } from "@/routers";
import LogoutIcon from "@/components/Icons/LogoutIcon";

import avatar from "@/public/image/avatar.png";
import bgHeaderMobile from "@/public/image/backgroundAvatar.png";
import HeaderItemOnMobile from "./HeaderItemOnMobile";

const HeaderOnMobile = () => {
  const theme = useTheme();
  const [user] = useAuthState(auth);

  const {
    toggleOff: handleCloseHeaderMobile,
    on: isOpenHeaderMobile,
    toggle: toggleHeaderMobile,
  } = useToggle();

  const handleLogoutAccount: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    signOut(auth);
    handleCloseHeaderMobile();
  };

  return (
    <Fragment>
      <Hamburger
        toggled={isOpenHeaderMobile}
        toggle={toggleHeaderMobile}
        color={theme.palette.common.white}
      />

      <Overlay
        backgroundColor="dark_50"
        onClick={handleCloseHeaderMobile}
        className={isOpenHeaderMobile ? "active" : ""}
      />

      <Container className={isOpenHeaderMobile ? "active" : ""}>
        <Link href={ROUTES.login} className={"heading"}>
          <Box className={"image-wrapper"}>
            <Image src={avatar.src} />
          </Box>

          <Typography className={"heading-title"} variant={"body2"}>
            {user ? user?.displayName : "Login/Signup"}
          </Typography>
        </Link>

        {NAVITEM.map((item, idx: number) => {
          const { href, icon, title } = item;
          return (
            <Box key={idx}>
              {item.divider && <Divider light className={"divider"} />}
              <HeaderItemOnMobile
                href={href}
                icon={icon}
                title={title}
                onClick={handleCloseHeaderMobile}
              />
            </Box>
          );
        })}

        {user && (
          <HeaderItemOnMobile
            href="/logout"
            icon={LogoutIcon}
            title="Đăng xuất"
            onClick={handleLogoutAccount}
          />
        )}
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
    background: "rgb(35, 37, 43)",

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

      display: "flex",
      alignItems: "center",
      padding: "22px 24px",
      color: theme.palette.common.white,

      ["&:after"]: {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundImage:
          " linear-gradient(rgba(26, 28, 34, 0) 0%, rgba(26, 28, 34, 0.06) 6%, rgba(26, 28, 34, 0.12) 12%, rgba(26, 28, 34, 0.19) 19%, rgba(26, 28, 34, 0.26) 26%, rgba(26, 28, 34, 0.34) 34%, rgba(26, 28, 34, 0.42) 42%, rgba(26, 28, 34, 0.5) 50%, rgba(26, 28, 34, 0.58) 58%, rgba(26, 28, 34, 0.66) 66%, rgba(26, 28, 34, 0.74) 74%, rgba(26, 28, 34, 0.81) 81%, rgba(26, 28, 34, 0.88) 88%, rgba(26, 28, 34, 0.94) 94%, rgb(26, 28, 34) 100%)",
      },

      ["& .image-wrapper"]: {
        position: "relative",
        width: 40,
        height: 40,
        borderRadius: "50%",
        overflow: "hidden",
        marginRight: 12,
      },
    },

    ["& .divider"]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      height: 1,
      backgroundColor: "#6d7485",
    },
  };
});

export default HeaderOnMobile;
