import { Box, Stack, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";

import { Link, Image } from "@/components";
import { ROUTES } from "@/routers";
import { useMedia } from "@/hooks";
import HeaderOnMobile from "./HeaderOnMobile";

import logo from "@/public/image/logo.png";

const HeaderItem = () => {
  const [ref, { width }] = useMeasure();

  const { isMdDown } = useMedia();

  return (
    <Container>
      {isMdDown && <HeaderOnMobile />}

      <StyledImageWrapper ref={ref}>
        <Image src={logo} width={width} height={width} />
      </StyledImageWrapper>

      <StyledNavLink href={ROUTES.movie}>
        <Typography variant="subtitle1">Movie</Typography>
      </StyledNavLink>

      <StyledNavLink href={ROUTES.tv}>
        <Typography variant="subtitle1">Tv</Typography>
      </StyledNavLink>
    </Container>
  );
};

const Container = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  };
});

const StyledImageWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    width: 170,
    height: 43,

    ["& img"]: {
      objectFit: "cover",
      cursor: "pointer",

      [theme.breakpoints.down("md")]: {
        marginLeft: "-24px",
      },
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
  };
});

const StyledNavLink = styled(Link)(({ theme }) => {
  return {
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
  };
});

export default HeaderItem;
