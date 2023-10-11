import { memo } from "react";
import { Stack, Typography, styled, Container as MuiContainer, Box } from "@mui/material";

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components";

const Footer = () => {
  return (
    <Container>
      <MuiContainer>
        <Stack className={"footer"}>
          <Typography>@ 2020 Pied Piper, All rights reserved</Typography>

          <Stack className={"social-media"}>
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <LinkedinIcon className="icon" />
          </Stack>
        </Stack>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: 50,
    backgroundColor: "rgb(10, 12, 15)",
    borderTop: "1px solid rgb(45, 47, 52)",

    ["& .footer"]: {
      padding: "32px 0px",

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#ECECEC",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: 16,
      },

      ["& .icon"]: {
        width: 20,
        height: 20,
      },

      ["& .social-media"]: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,

        ["&:hover"]: {
          cursor: "pointer",
        },
      },
    },
  };
});

export default memo(Footer);
