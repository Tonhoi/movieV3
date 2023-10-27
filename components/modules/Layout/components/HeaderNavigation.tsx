import { memo } from "react";
import { Box, Stack, Typography, styled, useTheme } from "@mui/material";

import { ROUTES } from "@/routers";
import { useMedia } from "@/hooks";
import { Link, Image } from "@/components/common";
import { useDarkModeContext } from "@/contexts/ThemeProvider/ThemeProvider";
import { MENU_TEXT } from "@/constants";
import logo_light from "@/public/image/logo_light.png";
import logo_dark from "@/public/image/dark_logo.png";
import Hamburger from "hamburger-react";

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

interface HeaderNavigationProps {
  isActiveHeader: boolean;
  isOpenHeaderMobile: boolean;
  toggleHeaderMobile: () => void;
}

const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { isActiveHeader, isOpenHeaderMobile, toggleHeaderMobile } = props;

  const { isMdDown, isSmDown } = useMedia();
  const { isDarkTheme } = useDarkModeContext();
  const theme = useTheme();

  const isHeaderElementDark = (isActiveHeader || isSmDown) && !isDarkTheme;

  return (
    <Container>
      {isMdDown && (
        <Hamburger
          toggled={isOpenHeaderMobile}
          toggle={toggleHeaderMobile}
          color={isHeaderElementDark ? theme.palette.common.black : "#fff"}
        />
      )}

      <Link href={ROUTES.home} className={"logo-on-pc"}>
        <Image src={isHeaderElementDark ? logo_dark.src : logo_light.src} />
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
