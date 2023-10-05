import { Stack, Typography, styled, Container as MuiContainer } from "@mui/material";

import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components";

const Footer = () => {
  return (
    <MuiContainer>
      <Container>
        <Typography>@ 2020 Pied Piper, All rights reserved</Typography>

        <Stack className={"social-wrapper"}>
          <TwitterIcon className="icon" />
          <FacebookIcon className="icon" />
          <LinkedinIcon className="icon" />
        </Stack>
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
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

    ["& .social-wrapper"]: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,

      ["&:hover"]: {
        cursor: "pointer",
      },
    },
  };
});

export default Footer;
