import { Box, Stack, Typography, styled } from "@mui/material";

import { Link, Image } from "@/components";
import { ROUTES } from "@/routers";
import { useMedia } from "@/hooks";
import HeaderOnMobile from "./HeaderOnMobile/HeaderOnMobile";

import logo from "@/public/image/logo.png";

const NAVITEM = [
  {
    id: 1,
    title: "Movie",
    href: ROUTES.movie,
  },
  {
    id: 2,
    title: "Tv",
    href: ROUTES.tv,
  },
];

const HeaderItem = () => {
  const { isMdDown } = useMedia();

  return (
    <Container>
      {isMdDown && <HeaderOnMobile />}

      <Link href={ROUTES.home} className={"logo"}>
        <Image src={logo} />
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

    ["& .logo"]: {
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
        color: theme.palette.common.white,

        "&:hover": {
          color: theme.palette.text_hover.main,
          transition: "color linear 0.2s",
        },

        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      },
    },
  };
});

export default HeaderItem;
