import Movie from "@/containers/Movie";
import { GetStaticProps } from "next";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";
import { IPage, responseSchema } from "@/interfaces";
import { GENRES, MOVIESCHEMA } from "@/interfaces/responseSchema/utils";

export type MoviePageProps = IPage<[responseSchema<MOVIESCHEMA>, responseSchema<GENRES>]>;

const movie = (props: MoviePageProps) => {
  return <Movie {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resGenres = await axios.get("/genre/movie/list", {
      params: {
        language: "vi",
      },
    });

    return {
      props: {
        initData: [resGenres, { type: "movie" }],
        fallback: true,
        revalidate: 30,
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
