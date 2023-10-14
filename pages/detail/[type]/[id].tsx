import DetailMovieComponent from "@/containers/DetailMovie/DetailMovie";
import {
  MOVIESCHEMA,
  RESPONSEDATA as ResponseData,
  TVSCHEMA,
} from "@/interfaces/responseSchema/utils";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";
import { Paths } from "@/interfaces/responseSchema/utils";
import { IPage, responseSchema } from "@/interfaces";
import { CREDITSCHEMA } from "@/interfaces/responseSchema/credits";
import { REVIEWSCHEMA } from "@/interfaces/responseSchema/reviews";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";

export type DetailPageProps = IPage<
  [
    DetailMovie,
    CREDITSCHEMA,
    responseSchema<REVIEWSCHEMA>,
    responseSchema<TVSCHEMA & MOVIESCHEMA>
  ]
>;

const index = (props: DetailPageProps) => {
  return <DetailMovieComponent {...props} />;
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
    const resDetailMovie = await axios.get(`/${type}/${id}?language=en-US`);
    const resCredit = await axios.get(`/${type}/${id}/credits`);
    const resReviews = await axios.get(`/${type}/${id}/reviews?language=en-US&page=1`);
    const resRecommendations = await axios.get(
      `/${type}/${id}/recommendations?language=en-US&page=1`
    );

    return {
      props: {
        initData: [resDetailMovie, resCredit, resReviews, resRecommendations],
        revalidate: 60,
        fallback: true,
      },
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
