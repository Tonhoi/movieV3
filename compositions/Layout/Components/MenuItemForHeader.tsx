import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
import { useMeasure } from "react-use";

import { Link, Image } from "@/components";
import { ROUTER } from "@/router";
import logo from "@/public/image/logo.png";
import { useMedia } from "@/hooks";
import SwipeableTemporaryDrawer from "./AppBarForHeader";

const MenuItemForHeader = () => {
  const [ref, { width }] = useMeasure();

  const theme = useTheme();
  const { isMdDown } = useMedia();

  return (
    <StyledWrapper>
      {isMdDown && <SwipeableTemporaryDrawer />}
      <StyledImageBlock ref={ref}>
        <StyledImage src={logo} width={width} height={width} />
      </StyledImageBlock>

      <StyledLink href={ROUTER.movie}>
        <Typography variant="subtitle1">Movie</Typography>
      </StyledLink>

      <StyledLink href={ROUTER.tv}>
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
const StyledImage = styled(Image)(({ theme }) => {
  return {
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-24px",
    },
  };
});

export default MenuItemForHeader;
