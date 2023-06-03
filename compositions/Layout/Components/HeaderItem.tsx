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
    <StyledWrapper>
      {isMdDown && <HeaderOnMobile />}

      <StyledImageBlock ref={ref}>
        <Image src={logo} width={width} height={width} />
      </StyledImageBlock>

      <StyledLink href={ROUTES.movie}>
        <Typography variant="subtitle1">Movie</Typography>
      </StyledLink>

      <StyledLink href={ROUTES.tv}>
        <Typography variant="subtitle1">Tv</Typography>
      </StyledLink>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  };
});

const StyledLink = styled(Link)(({ theme }) => {
  return {
    textDecoration: "none",
    opacity: 0.6,
    color: theme.palette.common.white,

    "&:hover": {
      color: "rgb(28, 199, 73)",
      transition: "color linear 0.2s",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});

const StyledImageBlock = styled(Box)(({ theme }) => {
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

export default HeaderItem;
