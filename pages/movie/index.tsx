import Movie, { MoviePageProps } from "@/containers/Movie";
import { GetServerSidePropsContext } from "next";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";

const movie = (props: MoviePageProps) => {
  return <Movie {...props} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const serverRouter = context.query.page;

    const resDiscoverMovie = await axios.get(TYPE_PARAMS["discover_movie"], {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: serverRouter,
        sort_by: "popularity.desc",
      },
    });

    return {
      props: {
        initData: [resDiscoverMovie],
        fallback: {
          [`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${serverRouter}&sort_by=popularity.desc`]:
            resDiscoverMovie,
        },
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

export default movie;
