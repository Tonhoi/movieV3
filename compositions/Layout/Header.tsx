import { useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Container as MuiContainer, Grid, styled } from "@mui/material";
import { useWindowScroll } from "react-use";

import { HeaderNavigation, HeaderAction, HeaderSearch } from "@/compositions";
import { useToggle } from "@/hooks";

const Header = () => {
  const { y } = useWindowScroll();
  const { toggleOff, toggleOn, on: isBackgroundHeader } = useToggle();
  const { asPath } = useRouter();

  useEffect(() => {
    if (y >= 200 && !isBackgroundHeader) {
      return toggleOn;
    } else if (y < 200 && isBackgroundHeader) {
      return toggleOff;
    }
  }, [y]);

  return (
    <Container
      className={isBackgroundHeader || asPath.startsWith("/play") ? "active" : ""}
    >
      <MuiContainer>
        <Grid container alignItems={"center"} spacing={2}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <HeaderNavigation />
          </Grid>

          <Grid item lg={5} md={4} sm={6.5} xs={12}>
            <HeaderSearch />
          </Grid>

          <Grid item lg={3} md={4} sm={1.5} xs={12}>
            <HeaderAction />
          </Grid>
        </Grid>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 99,

    width: "100%",
    padding: "9px 0",
    backgroundColor: "transparent",
    transition: "all linear 0.2s",

    ["&.active"]: {
      backgroundColor: "rgb(10, 12, 15)",
    },

    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      paddingBottom: 12,
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export default Header;
