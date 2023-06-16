import CardItem from "@/components/Card/CardItem";
import DetailCardItem from "@/components/Card/DetailCardItem";
import TopTrendingCarditem from "@/components/Card/TopTrendingCarditem";
import CardItem2 from "@/components/Card/CardItem2";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import CastCardItem from "@/components/Card/CastCardItem/CastCardItem";
import { Spacing } from "@/components";
import ContentCastCardItem from "@/components/Card/CastCardItem/ContentCastCardItem";

const Home = () => {
  return (
    <Container>
      {/* <CardItem /> */}
      {/* <DetailCardItem /> */}
      {/* <TopTrendingCarditem /> */}
      <Spacing spacing={2} />
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} xs={4}>
          <DetailCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={4}>
          <CastCardItem />
        </Grid>
        <Grid item lg={4} md={4} xs={4}>
          <CastCardItem />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
