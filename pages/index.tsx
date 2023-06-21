import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "@/axios.config";
import Home, { HomePageProps } from "@/containers/Home";

export default function home(props: HomePageProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resPopularMovie = await axios.get("/movie/popular");
    const resPopularTv = await axios.get("/tv/popular");
    const resTrendingMovie = await axios.get("/trending/all/day");
    const resTopRateTv = await axios.get("/tv/top_rated");
    const resTopRateMovie = await axios.get("/movie/top_rated");
    const resUpcoming = await axios.get("/movie/upcoming");

    return {
      props: {
        initData: [
          resPopularMovie,
          resPopularTv,
          resTrendingMovie,
          resTopRateTv,
          resTopRateMovie,
          resUpcoming,
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
