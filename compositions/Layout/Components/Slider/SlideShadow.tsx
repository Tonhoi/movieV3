import { Fragment, memo } from "react";
import { Box, styled } from "@mui/material";

const ShadowSlider = () => {
  return (
    <Fragment>
      <StyledBoxShadowLeft />

      <StyledBoxShadowTop />

      <StyledBoxShadowRight />
    </Fragment>
  );
};

const StyledBoxShadowLeft = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,

    width: "30%",
    height: "100%",

    background: theme.palette.gradientColor.gradient4,
  };
});

const StyledBoxShadowTop = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 3,

    width: "100%",
    height: "120px",

    background: theme.palette.gradientColor.gradient5,
  };
});

const StyledBoxShadowRight = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,

    width: "15%",
    height: "100%",

    background: theme.palette.gradientColor.gradient3,
  };
});

export default memo(ShadowSlider);
