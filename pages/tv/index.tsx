import { GetServerSidePropsContext } from "next";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";
import { IPage, responseSchema } from "@/interfaces";
import { GENRES, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import Movie from "@/containers/Movie";

export type TvPageProps = IPage<[responseSchema<TVSCHEMA>, responseSchema<GENRES>]>;

const tv = (props: TvPageProps) => {
  return <Movie {...props} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const serverRouter = context.query.page;

    const resDiscoverTv = await axios.get(TYPE_PARAMS["discover_tv"], {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: serverRouter,
        sort_by: "popularity.desc",
      },
    });

    const resGenres = await axios.get("/genre/tv/list", {
      params: {
        language: "vi",
      },
    });

    return {
      props: {
        initData: [resDiscoverTv, resGenres, { type: "tv" }],
        fallback: {
          [`${TYPE_PARAMS["discover_tv"]}?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${serverRouter}&sort_by=popularity.desc`]:
            resDiscoverTv,
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

export default tv;
