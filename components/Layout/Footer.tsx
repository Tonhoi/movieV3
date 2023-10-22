import { memo } from "react";
import { Stack, Typography, styled, Container as MuiContainer, Box } from "@mui/material";

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components";

const Footer = () => {
  return (
    <Container>
      <MuiContainer>
        <Stack className={"footer"}>
          <Typography variant="caption" className={"coppy-right"}>
            Copyright © 2023. All Rights Reserved By{" "}
            <Typography variant="caption" color={"#1cc749"} className="coppy-right">
              Movie
            </Typography>
          </Typography>

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
    backgroundColor: theme.palette.bg_color.main,
    borderTop: "1px solid rgb(45, 47, 52)",

    ["& .footer"]: {
      padding: "32px 0px",

      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      color: theme.palette.text_color.main,

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: 16,
      },

      ["& .coppy-right"]: {
        fontSize: 14,
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
