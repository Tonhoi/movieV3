import { Box, styled, Container as MuiContainer, Grid } from "@mui/material";
import HeadingPlayMovie from "./components/HeadingPlayMovie";
import Comment from "./components/Comment";
import ContentPlayMovie from "./components/ContentPlayMovie";

const PlayMovie = () => {
  return (
    <Container>
      <HeadingPlayMovie />

      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <ContentPlayMovie />
          <Box className={"content"}>
            <Comment />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}></Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    paddingTop: 86,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 12,
    },
  };
});

export default PlayMovie;
