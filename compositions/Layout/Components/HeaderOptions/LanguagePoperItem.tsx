import { MouseEventHandler } from "react";
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
        <Typography className="title">English</Typography>
        <Typography className="title">Tiếng Việt</Typography>
      </Container>
    </PoperWrapper>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    minWidth: 282,
    padding: "16px 0",
    textAlign: "center",

    ["& .title"]: {
      lineHeight: "44px",

      ["&:hover"]: {
        background: theme.palette.opacity.white_008,
        color: theme.palette.text_hover.main,
        transition: "all linear 0.2s",
      },
    },
  };
});

export default MenuForLanguage;
