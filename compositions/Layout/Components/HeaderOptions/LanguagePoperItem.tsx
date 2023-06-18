import { Box, Typography, styled } from "@mui/material";

import PoperWrapper from "./PoperWrapper";

const LanguagePoperItem = () => {
  return (
    <PoperWrapper className={"poper-wrapper"}>
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

export default LanguagePoperItem;
