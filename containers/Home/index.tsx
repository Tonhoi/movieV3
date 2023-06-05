import CardItem from "@/components/Card/CardItem";
import DetailCardItem from "@/components/Card/DetailCardItem";
import TopTrendingCarditem from "@/components/Card/TopTrendingCarditem";
import CardItem2 from "@/components/Card/CardItem2";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import CastCardItem from "@/components/Card/CastCardItem/CastCardItem";

const Home = () => {
  return (
    <Box>
      {/* <CardItem /> */}
      {/* <DetailCardItem /> */}
      {/* <TopTrendingCarditem /> */}

      {/* <Grid container spacing={2}>
        <Grid item lg={3} md={3} xs={3}>
          <CardItem2 />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <CardItem2 />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <CardItem2 />
        </Grid>
        <Grid item lg={3} md={3} xs={3}>
          <CardItem2 />
        </Grid>
      </Grid> */}

      <CastCardItem />
    </Box>
  );
};

export default Home;
