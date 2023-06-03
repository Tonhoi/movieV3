import React, { MouseEventHandler } from "react";

import { Button, Stack, Typography, styled } from "@mui/material";
import { Link } from "@/components";
import { ROUTES } from "@/routers";
import PoperWrapper from "./PoperWrapper";

interface menuForLanguageProps {
  openMenuOfAccount: boolean;
  handleClose: MouseEventHandler<HTMLAnchorElement> | undefined;
}

const MenuForMe = (props: menuForLanguageProps) => {
  const { openMenuOfAccount, handleClose } = props;
  return (
    <PoperWrapper className={openMenuOfAccount ? "active" : ""}>
      <Container>
        <Typography variant={"body2"} color={"#A9A9AC"}>
          Login to watch trendy content
        </Typography>
        <Button
          variant={"contained"}
          LinkComponent={Link}
          href={ROUTES.login}
          color={"inherit"}
          onClick={handleClose}
        >
          Login
        </Button>
      </Container>
    </PoperWrapper>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    width: "100%",
    minWidth: 280,
    padding: 16,
    alignItems: "center",
    gap: 12,

    ["& a"]: {
      display: "block",
      background: "rgb(28, 199, 73)",
      color: theme.palette.common.white,
      padding: "3px 36px",

      ["&:hover"]: {
        background: "rgb(28, 199, 73)",
      },
    },
  };
});

export default MenuForMe;
