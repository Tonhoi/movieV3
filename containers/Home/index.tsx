import CardItem from "@/components/Card/CardItem";
import DetailCardItem from "@/components/Card/DetailCardItem";
import TopTrendingCarditem from "@/components/Card/TopTrendingCarditem";
import CardItem2 from "@/components/Card/CardItem2";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import CastCardItem from "@/components/Card/CastCardItem/CastCardItem";
import { Spacing } from "@/components";
import CardItem3 from "@/components/Card/CardItem3";

const Home = () => {
  return (
    <Container>
      <Spacing spacing={4} />
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem />
        </Grid>
      </Grid>

      <Spacing spacing={4} />

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem2 />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem2 />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem2 />
        </Grid>
      </Grid>

      <Spacing spacing={4} />

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem3 />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem3 />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CardItem3 />
        </Grid>
      </Grid>

      <Spacing spacing={4} />

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <DetailCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <DetailCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <DetailCardItem />
        </Grid>
      </Grid>

      <Spacing spacing={4} />

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <TopTrendingCarditem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <TopTrendingCarditem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <TopTrendingCarditem />
        </Grid>
      </Grid>

      <Spacing spacing={4} />

      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={12}>
          <CastCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CastCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <CastCardItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
