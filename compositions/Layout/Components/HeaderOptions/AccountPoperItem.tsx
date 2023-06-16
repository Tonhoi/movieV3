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
        <Typography variant={"body2"} className={"title"}>
          Login to watch trendy content
        </Typography>
        <Button
          variant={"contained"}
          LinkComponent={Link}
          href={ROUTES.login}
          color={"inherit"}
          onClick={handleClose}
          className={"btn"}
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

    ["& .title"]: {
      color: "#A9A9AC",
    },

    ["& .btn"]: {
      display: "block",
      background: theme.palette.text_hover.main,
      color: theme.palette.common.white,
      padding: "3px 36px",

      ["&:hover"]: {
        background: theme.palette.text_hover.main,
      },
    },
  };
});

export default MenuForMe;
