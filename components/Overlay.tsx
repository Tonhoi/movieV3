import { Box, BoxProps, styled } from "@mui/material";
import React, { ReactNode } from "react";

type backgroundColorType =
  | "rgba(0, 0, 0, 0.1)"
  | "rgba(0, 0, 0, 0.2)"
  | "rgba(0, 0, 0, 0.3)"
  | "rgba(0, 0, 0, 0.4)"
  | "rgba(0, 0, 0, 0.5)"
  | "rgba(0, 0, 0, 0.6)"
  | "rgba(0, 0, 0, 0.7)"
  | "rgba(0, 0, 0, 0.8)"
  | "rgba(0, 0, 0, 0.9)"
  | "rgba(0, 0, 0, 1)";

interface OverlayProps extends BoxProps {
  children?: ReactNode;
  backgroundColor?: backgroundColorType;
}

const Overlay = (props: OverlayProps) => {
  const { children, backgroundColor } = props;
  return (
    <Container backgroundColor={backgroundColor} {...props}>
      {children}
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backgroundColor",
})<Pick<OverlayProps, "backgroundColor">>(({ backgroundColor }) => {
  return {
    position: "fixed",
    inset: 0,
    zIndex: 10,

    display: "none",

    backgroundColor,

    "&.active": {
      display: "block",
    },
  };
});

export default Overlay;
