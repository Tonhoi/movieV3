import { ReactNode } from "react";
import { Box, BoxProps, styled } from "@mui/material";

interface CardItemBaseprops extends BoxProps {
  children: ReactNode;
}

const CardItemBase = (props: CardItemBaseprops) => {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
};

const Container = styled(Box)(({ theme }) => {
  return {
    cursor: "pointer",

    ["& .card-image"]: {
      position: "relative",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      overflow: "hidden",

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
