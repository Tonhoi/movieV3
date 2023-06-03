import React, { MouseEventHandler } from "react";
import { Box, Typography, styled } from "@mui/material";
import PoperWrapper from "./PoperWrapper";

interface menuForLanguageProps {
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}

const MenuForLanguage = (props: menuForLanguageProps) => {
  const { openMenuOfLanguage, handleClose } = props;

  return (
    <PoperWrapper className={openMenuOfLanguage ? "active" : ""}>
      <Container>
        <Typography>English</Typography>
        <Typography>Tiếng Việt</Typography>
      </Container>
    </PoperWrapper>
  );
};

const Container = styled(Box)(() => {
  return {
    minWidth: 282,
    padding: "16px 0",
    textAlign: "center",

    ["& p"]: {
      lineHeight: "44px",

      ["&:hover"]: {
        background: "rgba(255, 255, 255, 0.08)",
        color: "rgb(28, 199, 73)",
        transition: "all linear 0.2s",
      },
    },
  };
});

export default MenuForLanguage;
