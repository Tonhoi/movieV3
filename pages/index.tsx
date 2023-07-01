import { GetStaticProps } from "next";
import axios from "@/axios.config";

import Home, { HomePageProps } from "@/containers/Home";

export default function home(props: HomePageProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resTrendingMovie = await axios.get("/trending/all/day");
    const resUpcoming = await axios.get("/movie/upcoming");
    const resAiringToday = await axios.get("/tv/airing_today");
    const resTrendingPerson = await axios.get("/trending/person/day");
    const resNowPlaying = await axios.get("/movie/now_playing");

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
