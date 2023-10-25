import { get } from "lodash";
import { Fragment } from "react";
import { HomePageProps } from "@/pages";
import { Container as MuiContainer } from "@mui/material";

import { Slider } from "@/components/modules";
import {
  TrendingMovie,
  DailyWatchingMovie,
  PopularArtist,
  NowPlayingMovie,
  UpcomingMovie,
} from "@/containers/Home/components";

const Home = ({ initData }: HomePageProps) => {
  const dataTrendingMovie = get(initData[0], "results").slice(0, 9);
  const dataDailyWatchingMovie = get(initData[1], "results").slice(0, 6);
  const dataPopularArtist = get(initData[2], "results").slice(0, 12);
  const dataNowPlayingMovie = get(initData[3], "results").slice(0, 12);
  const dataUpComingMovie = get(initData[4], "results").slice(0, 12);

  return (
    <Fragment>
      <Slider />

      <MuiContainer>
        <TrendingMovie data={dataTrendingMovie} />

        <DailyWatchingMovie data={dataDailyWatchingMovie} />

        <PopularArtist data={dataPopularArtist} />

        <NowPlayingMovie data={dataNowPlayingMovie} />

        <UpcomingMovie data={dataUpComingMovie} />
      </MuiContainer>
    </Fragment>
  );
};

export default Home;
