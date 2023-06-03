import React, { MouseEventHandler } from "react";
import PoperWrapper from "./PoperWrapper";
import { Box, Button, Typography, styled, useTheme } from "@mui/material";
import { Image, Link } from "@/components";

import image from "@/public/image/image1.png";
import { ROUTES } from "@/routers";

interface MenuForHistoryProps {
  openMenuOfHistory: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}

const MenuForHistory = (props: MenuForHistoryProps) => {
  const { openMenuOfHistory, handleClose } = props;

  const theme = useTheme();

  console.log(theme);
  return (
    <PoperWrapper className={openMenuOfHistory ? "active" : ""}>
      <Container>
        <Box position={"relative"} width={80} height={80} margin={"0 auto"}>
          <Image src={image.src} />
        </Box>

        <Typography variant={"subtitle4"} fontWeight={400} color={"rgb(169, 169, 172)"}>
          Login to track your watch history on multiple devices.
        </Typography>

        <Button
          variant={"contained"}
          color={"inherit"}
          LinkComponent={Link}
          href={ROUTES.login}
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

    ["& span"]: {
      display: "block",

      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },

    ["& a"]: {
      padding: "3px 26px",

      background: "rgb(28, 199, 73)",

      ["&:hover"]: {
        background: "rgb(28, 199, 73)",
      },
    },
  };
});

export default MenuForHistory;
