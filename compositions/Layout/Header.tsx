import { Box, Container as MuiContainer, Grid, styled } from "@mui/material";

import { HeaderNavigation, HeaderOptions, HeaderSearch } from "@/compositions";
import { useWindowScroll } from "react-use";
import { useEffect } from "react";
import { useToggle } from "@/hooks";

const Header = () => {
  const { y } = useWindowScroll();
  const { toggleOff, toggleOn, on } = useToggle();

  useEffect(() => {
    if (y >= 200 && !on) {
      return toggleOn;
    } else if (y < 200 && on) {
      return toggleOff;
    }
  }, [y]);

  return (
    <Container className={on ? "active" : ""}>
      <MuiContainer>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <HeaderNavigation />
          </Grid>

          <Grid item lg={4} md={4} sm={6.5} xs={12}>
            <HeaderSearch />
          </Grid>

          <Grid item lg={4} md={4} sm={1.5} xs={12}>
            <HeaderOptions />
          </Grid>
        </Grid>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "fixed",
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
