import { ReactNode } from "react";
import { Box, BoxProps, styled } from "@mui/material";

interface CardItemBaseprops extends BoxProps {
  children: ReactNode;
  zoom?: "zoom-in" | "zoom-out" | "disableZoom";
}

const CardItemBase = (props: CardItemBaseprops) => {
  const { children, zoom = "zoom-out", ...restProps } = props;

  return (
    <Container zoom={zoom} {...restProps}>
      {children}
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "zoom",
})<{ zoom: "zoom-in" | "zoom-out" | "disableZoom" }>(({ zoom, theme }) => {
  return {
    cursor: "pointer",
    overflow: "hidden",
    transform: "scale(1)",
    transition: "transform linear 0.2s",

    ["&:hover"]: {
      transform: zoom === "zoom-out" ? "scale(1.05)" : "none",
    },

    ["& .card-image"]: {
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      overflow: "hidden",
      transform: "scale(1)",
      transition: "transform linear 0.2s",

      ["&:hover"]: {
        transform: zoom === "zoom-in" ? "scale(1.05)" : "none",
      },

      ["&:after"]: {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1,

        width: "100%",
        height: 60,

        backgroundImage: theme.palette.gradientColor.gradient2,
      },
    },
  };
});

export default CardItemBase;
