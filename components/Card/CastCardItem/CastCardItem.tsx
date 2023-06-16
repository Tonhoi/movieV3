import { Box, Divider, Grid, styled } from "@mui/material";

import HeadingCastCardItem from "./HeadingCastCardItem";
import ContentCastCardItem from "./ContentCastCardItem";

const CastCardItem = () => {
  return (
    <Container>
      <HeadingCastCardItem />

      <Divider light className="divider" />

      <Grid container spacing={1}>
        <Grid item lg={6} md={6} xs={6}>
          <ContentCastCardItem />
        </Grid>
        <Grid item lg={6} md={6} xs={6}>
          <ContentCastCardItem />
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: 12,
    borderRadius: "4px",

    ["& .divider"]: {
      backgroundColor: "#2D2F34",
      height: 2,

      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  };
});

export default CastCardItem;
