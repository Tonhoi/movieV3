import React, { ReactNode } from "react";
import { Box, BoxProps, styled } from "@mui/material";

interface PoperWrapperProps extends BoxProps {
  children: ReactNode;
}

const PoperWrapper = (props: PoperWrapperProps) => {
  const { children } = props;
  return <Container {...props}>{children}</Container>;
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    top: "calc(100% + 18px)",
    zIndex: theme.zIndex.tooltip,

    transform: "scale(0)",
    opacity: 0,
    transition: "all linear 0.2s",

    background: "rgb(26, 28, 34)",
    border: "1px solid rgba(255, 255, 255, 0.25)",
    borderRadius: 4,

    ["&.active"]: {
      transform: "scale(1)",
      opacity: 1,

      ["&:after"]: {
        content: '""',
        position: "absolute",
        bottom: "100%",
        left: "50%",
        transform: "translateX(-50%)",

        borderWidth: 8,
        borderStyle: "solid",
        borderColor: "transparent transparent rgb(26, 28, 34) transparent",
      },
    },
  };
});

export default PoperWrapper;
