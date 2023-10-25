import { memo } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { ROUTES } from "@/routers";
import { useMedia } from "@/hooks";
import { Link, Image } from "@/components/common";
import HeaderOnMobile from "./HeaderOnMobile/HeaderOnMobile";
import { useDarkModeContext } from "@/contexts/ThemeProvider/ThemeProvider";
import logo_light from "@/public/image/logo_light.png";
import logo_dark from "@/public/image/logo_dark.png";
import { MENU_TEXT } from "@/constants";

const NAVITEM = [
  {
    id: 1,
    title: MENU_TEXT.movie,
    href: ROUTES.movie,
  },
  {
    id: 2,
    title: MENU_TEXT.tv,
    href: ROUTES.tv,
  },
];

const HeaderNavigation = ({ isActiveHeader }: { isActiveHeader: boolean }) => {
  const { isMdDown, isSmDown } = useMedia();
  const { isDarkTheme } = useDarkModeContext();

  const isDisplayLogoDark = (isActiveHeader || isSmDown) && !isDarkTheme;

  return (
    <Container>
      {isMdDown && <HeaderOnMobile />}

      <Link href={ROUTES.home} className={"logo-on-pc"}>
        <Image src={isDisplayLogoDark ? logo_dark.src : logo_light.src} />
      </Link>

      <Box component={"ul"} className="nav-list">
        {NAVITEM.map((el) => (
          <Box component={"li"} key={el.id} className="nav-item">
            <Link href={el.href} key={el.id} className="nav-link">
              <Typography variant="subtitle1">{el.title}</Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,

    ["& .logo-on-pc"]: {
      position: "relative",

      width: 170,
      height: 43,

      ["& img"]: {
        objectFit: "cover",
        cursor: "pointer",
      },

      [theme.breakpoints.down("md")]: {
        margin: "0 auto",
        width: 140,
        height: 30,
      },

      [theme.breakpoints.down("sm")]: {
        width: 170,
        height: 43,
      },
    },

    ["& .nav-list"]: {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      gap: 30,
      padding: 0,

      ["& .nav-link"]: {
        textDecoration: "none",
        opacity: 0.6,
        color: "#fff",

        "&:hover": {
          color: "rgb(28, 199, 73)",
          transition: "color linear 0.2s",
        },

        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    },
  };
});

export default memo(HeaderNavigation);
