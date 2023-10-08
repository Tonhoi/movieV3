import { GetStaticProps } from "next";

import Home from "@/containers/Home/Home";
import { IPage, responseSchema } from "@/interfaces";
import { MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import { PEOPLELISTSCHEMA } from "@/interfaces/responseSchema/peopleList";
import movieServices from "@/services/movieServices";
import tvServices from "@/services/tvServices";
import artistServices from "@/services/artistServices";

export type HomePageProps = IPage<
  [
    responseSchema<MOVIESCHEMA>,
    responseSchema<TVSCHEMA>,
    responseSchema<PEOPLELISTSCHEMA>,
    responseSchema<MOVIESCHEMA>,
    responseSchema<MOVIESCHEMA>
  ]
>;

export default function home(props: HomePageProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const trendingMovie = await movieServices.getTrendingMovie();
  const DailyWatchingMovie = await tvServices.getTrendingTv();
  const popularArtist = await artistServices.getPopularArtist();
  const nowPlayingMovie = await movieServices.getNowPlayingMovie();
  const upComingMovie = await movieServices.getUpComingMovie();

  if (!trendingMovie || !DailyWatchingMovie || !popularArtist || !upComingMovie) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      initData: [
        trendingMovie,
        DailyWatchingMovie,
        popularArtist,
        nowPlayingMovie,
        upComingMovie,
      ],
      fallback: true,
    },
  };
};
