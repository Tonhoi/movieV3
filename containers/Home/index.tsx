import { Fragment, ReactNode, useMemo } from "react";
import { Container as MuiContainer, Typography, styled } from "@mui/material";
import { get } from "lodash";

import { CardItem, TopTrendingCarditem } from "@/components";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import {
  IPage,
  responseSchema,
  TopRateMovie,
  TopRateTv,
  TrendingMovie,
  UpComingMovie,
} from "@/interfaces";
import { AiringToday } from "@/interfaces/responseSchema/airingToday";
import { NowPlaing } from "@/interfaces/responseSchema/nowPlaying";

export type HomePageProps = IPage<
  [
    responseSchema<TrendingMovie>,
    responseSchema<TopRateMovie>,
    responseSchema<TopRateTv>,
    responseSchema<UpComingMovie>,
    responseSchema<AiringToday>,
    responseSchema<NowPlaing>
  ]
>;

const createSettingsSlide = {
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Home = ({ initData }: HomePageProps) => {
  const dataTrendingMovie = get(initData[0], "results");
  const dataTopRateTv = get(initData[1], "results");
  const dataTopRateMovie = get(initData[2], "results");
  const dataUpcoming = get(initData[3], "results");
  const dataAiringToday = get(initData[4], "results");
  const dataNowPlaying = get(initData[5], "results");

  const useRender = (data: any, RenderCard: any) => {
    return useMemo(() => {
      if (typeof data === "undefined") return null;

      return data.map((data: any) => <RenderCard key={data.id} data={data} />);
    }, [data]);
  };

  return (
    <Container>
      <HomeComponents title={"Trending"}>
        {useRender(dataTrendingMovie, TopTrendingCarditem)}
      </HomeComponents>

      <HomeComponents title={"Top Rate Movie"}>
        {useRender(dataTopRateMovie, CardItem)}
      </HomeComponents>

      <HomeComponents title={"Top Rate Tv"}>
        {useRender(dataTopRateTv, CardItem)}
      </HomeComponents>

      <HomeComponents title={"Upcoming"}>
        {useRender(dataUpcoming, TopTrendingCarditem)}
      </HomeComponents>

      <HomeComponents title={"Airing Today"}>
        {useRender(dataAiringToday, CardItem)}
      </HomeComponents>

      <HomeComponents title={"Now Playing"}>
        {useRender(dataNowPlaying, CardItem)}
      </HomeComponents>
    </Container>
  );
};

const HomeComponents = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Fragment>
      <Typography variant={"h3"} className={"title"}>
        {title}
      </Typography>

      <SlickSlider variant="multiple" props={createSettingsSlide}>
        {children}
      </SlickSlider>
    </Fragment>
  );
};

const Container = styled(MuiContainer)(() => {
  return {
    ["& .title"]: {
      marginLeft: 9.6,
      marginBottom: 6,
      marginTop: 24,
    },
  };
});

export default Home;
