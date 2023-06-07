import CardItem from "@/components/Card/CardItem";
import DetailCardItem from "@/components/Card/DetailCardItem";
import TopTrendingCarditem from "@/components/Card/TopTrendingCarditem";
import CardItem2 from "@/components/Card/CardItem2";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import CastCardItem from "@/components/Card/CastCardItem/CastCardItem";
import { Spacing } from "@/components";

const Home = () => {
  return (
    <Container>
      {/* <CardItem /> */}
      {/* <DetailCardItem /> */}
      {/* <TopTrendingCarditem /> */}
      <Spacing spacing={2}  />
      <Grid container spacing={2} columns={12}>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
        <Grid item lg={2} md={4} xs={4}>
          <CardItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
