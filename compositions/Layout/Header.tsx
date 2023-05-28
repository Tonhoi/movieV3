import { Box, Container, Grid, styled } from "@mui/material";

import { MenuItemForHeader, MenuOptionsForHeader } from "@/compositions";

const Header = () => {
  return (
    <StyledWrapper>
      <Container>
        <StyledGridContainer container spacing={2}>
          <Grid item lg={6} md={4} sm={4} xs={12}>
            <MenuItemForHeader />
          </Grid>

          <Grid item lg={6} md={8} sm={8} xs={12}>
            <MenuOptionsForHeader />
          </Grid>
        </StyledGridContainer>
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(() => {
  return {
    position: "fixed",

    width: "100%",
    padding: "9px 0",
  };
});

const StyledGridContainer = styled(Grid)(() => {
  return {
    justifyContent: "space-between",
    alignItems: "center",
  };
});

export default Header;
