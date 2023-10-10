import Movie from "@/containers/Movie";
import { GetServerSidePropsContext } from "next";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";
import { IPage, responseSchema } from "@/interfaces";
import { GENRES, MOVIESCHEMA } from "@/interfaces/responseSchema/utils";

export type MoviePageProps = IPage<[responseSchema<MOVIESCHEMA>, responseSchema<GENRES>]>;

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

    const resGenres = await axios.get("/genre/movie/list", {
      params: {
        language: "vi",
      },
    });

    return {
      props: {
        initData: [resDiscoverMovie, resGenres, { type: "movie" }],
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

export default movie;
