import { GetStaticProps } from "next";
import axios from "@/axios.config";
import { IPage, responseSchema } from "@/interfaces";
import { GenreProps, MovieProps } from "@/interfaces/responseSchema/utils";
import MovieList from "@/containers/MovieList";

export type MoviePageProps = IPage<
  [responseSchema<MovieProps>, responseSchema<GenreProps>]
>;

const movie = (props: MoviePageProps) => {
  return <MovieList {...props} />;
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
        revalidate: 60,
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
