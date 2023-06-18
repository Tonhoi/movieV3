import { Box, Button, Typography, styled } from "@mui/material";

import { Image, Link } from "@/components";
import PoperWrapper from "./PoperWrapper";
import { ROUTES } from "@/routers";

import image from "@/public/image/image1.png";

const HistoryPoperItem = () => {
  return (
    <PoperWrapper className={"poper-wrapper"}>
      <Container>
        <Box className={"image-wrapper"}>
          <Image src={image.src} />
        </Box>

        <Typography variant={"subtitle4"} className={"title"}>
          Login to track your watch history on multiple devices.
        </Typography>

        <Button
          variant={"contained"}
          LinkComponent={Link}
          href={ROUTES.login}
          className="btn"
        >
          Login
        </Button>
      </Container>
    </PoperWrapper>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    textAlign: "center",
    minWidth: 280,
    padding: "16px 26px",

    ["& .image-wrapper"]: {
      position: "relative",
      width: 80,
      height: 80,
      margin: "0 auto",
    },

    ["& .title"]: {
      display: "block",

      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),

      fontWeight: 400,
      color: "rgb(169, 169, 172)",
    },

    ["& .btn"]: {
      padding: "3px 26px",
      color: "inherit",

      background: theme.palette.text_hover.main,

      ["&:hover"]: {
        background: theme.palette.text_hover.main,
      },
    },
  };
});

export default HistoryPoperItem;
