import { useMedia } from "@/hooks";
import { Box, styled, Container as MuiContainer, Grid } from "@mui/material";

import Sidebar from "../../components/Sidebar";

const History = () => {
  const { isMdDown } = useMedia();
  return (
    <MuiContainer>
      <Container>
        <Grid container spacing={isMdDown ? 0 : 10}>
          <Grid item lg={2.8} md={2.8} sm={0} xs={0}>
            <Sidebar />
          </Grid>

          <Grid item lg={9.2} md={9.2} sm={12} xs={12}>
            Tính năng đang được cập nhập ...
          </Grid>
        </Grid>
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Box)(() => {
  return {
    paddingTop: 82,
  };
});

export default History;
