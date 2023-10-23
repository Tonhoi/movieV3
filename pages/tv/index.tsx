import { GetStaticProps } from "next";
import axios from "@/axios.config";
import { IPage, responseSchema } from "@/interfaces";
import { GenreProps, TvProps } from "@/interfaces/responseSchema/utils";
import Movie from "@/containers/Movie";

export type TvPageProps = IPage<[responseSchema<TvProps>, responseSchema<GenreProps>]>;

const tv = (props: TvPageProps) => {
  return <Movie {...props} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const resGenres = await axios.get("/genre/tv/list", {
      params: {
        language: "vi",
      },
    });

    return {
      props: {
        initData: [resGenres, { type: "tv" }],
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

export default tv;
