import { GetStaticProps } from "next";
import axios from "@/axios.config";

import Home, { HomePageProps } from "@/containers/Home";
import { TYPE_PARAMS } from "@/apis";

export default function home(props: HomePageProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resTrendingMovie = await axios.get(TYPE_PARAMS["trending_movie"]);
    const resUpcoming = await axios.get(TYPE_PARAMS["upcoming"]);
    const resAiringToday = await axios.get(TYPE_PARAMS["airing_today"]);
    const resTrendingPerson = await axios.get(TYPE_PARAMS["trending_person"]);
    const resNowPlaying = await axios.get(TYPE_PARAMS["now_playing"]);

    return {
      props: {
        initData: [
          resTrendingMovie,
          resUpcoming,
          resAiringToday,
          resTrendingPerson,
          resNowPlaying,
        ],
        fallback: true,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};
