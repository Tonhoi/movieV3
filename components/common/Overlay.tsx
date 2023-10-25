import { ReactNode } from "react";
import { Box, BoxProps, styled } from "@mui/material";

type backgroundColorType =
  | "dark_10"
  | "dark_20"
  | "dark_30"
  | "dark_40"
  | "dark_50"
  | "dark_60"
  | "dark_70"
  | "dark_80"
  | "dark_90"
  | "dark_100";

interface OverlayProps extends BoxProps {
  children?: ReactNode;
  backgroundColor?: backgroundColorType;
}

const Overlay = (props: OverlayProps) => {
  const { children, backgroundColor = "dark_10" } = props;

  return (
    <Container backgroundColor={backgroundColor} position={"fixed"} {...props}>
      {children}
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundColor",
})<{ backgroundColor: backgroundColorType }>(({ backgroundColor, theme }) => {
  return {
    inset: 0,
    zIndex: 10,

    display: "none",

    backgroundColor: theme.palette.opacity[`${backgroundColor}`],

    "&.active": {
      display: "block",
    },
  };
});

export default Overlay;
