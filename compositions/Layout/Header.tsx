import { Box, Container as MuiContainer, Grid, styled } from "@mui/material";

import { HeaderNavigation, HeaderOptions } from "@/compositions";

const Header = () => {
  return (
    <Container>
      <MuiContainer>
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item lg={6} md={4} sm={4} xs={12}>
            <HeaderNavigation />
          </Grid>

          <Grid item lg={6} md={8} sm={8} xs={12}>
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

    [theme.breakpoints.down("sm")]: {
      position: "sticky",
      top: 0,
      paddingBottom: 12,
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export default Header;
