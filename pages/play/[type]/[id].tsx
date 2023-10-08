import PlayMovie from "@/containers/PlayMovie/PlayMovie";
import axios from "@/axios.config";
import {
  MOVIESCHEMA,
  Paths,
  RESPONSEDATA as ResponseData,
  TVSCHEMA,
} from "@/interfaces/responseSchema/utils";
import { TYPE_PARAMS } from "@/apis";
import { IPage, responseSchema } from "@/interfaces";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";

export type PlayMoviePageProps = IPage<[responseSchema<MOVIESCHEMA>, DetailMovie]>;

const index = (props: PlayMoviePageProps) => {
  return <PlayMovie {...props} />;
};

export async function getStaticPaths() {
  const paths: Array<Paths> = [];
  try {
    const detailTv: ResponseData = await axios.get(TYPE_PARAMS["discover_tv"], {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
    });

    const detailMovie: ResponseData = await axios.get(TYPE_PARAMS["discover_movie"], {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
    });

    detailTv.results.map((movie: TVSCHEMA) => {
      paths.push({ params: { type: "tv", id: `${movie.id}` } });
    });

    detailMovie.results.map((movie: MOVIESCHEMA) => {
      paths.push({ params: { type: "movie", id: `${movie.id}` } });
    });
  } catch (error) {
    console.log("không đúng đường dẫn");
  }

  return {
    paths,
    fallback: true,
  };
}

interface ParamsProps {
  params: {
    type: string;
    id: string;
  };
}

export async function getStaticProps({ params }: ParamsProps) {
  try {
    const { type, id } = params;
    const resRecomendations = await axios.get(`/${type}/${id}/recommendations`, {
      params: {
        language: "en-US",
        page: "1",
      },
    });
    const resDetailMovie = await axios.get(`/${type}/${id}?language=en-US`);

    return {
      props: { initData: [resRecomendations, resDetailMovie], fallback: true },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default index;
