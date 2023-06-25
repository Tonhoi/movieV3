import DetailMovie, { DetailPageProps } from "@/containers/DetailMovie/DetailMovie";
import { RESPONSEDATA as ResponseData } from "@/interfaces/responseSchema/utils";
import axios from "@/axios.config";
import { TYPE_PARAMS } from "@/apis";

const index = (props: DetailPageProps) => {
  return <DetailMovie {...props} />;
};

export async function getStaticPaths() {
  const paths: any = [];
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

    detailTv.results.map((movie: any) => {
      paths.push({ params: { type: "tv", id: `${movie.id}` } });
    });

    detailMovie.results.map((movie: any) => {
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

export async function getStaticProps({ params }: any) {
  const { type, id } = params;
  const resDetailMovie = await axios.get(`/${type}/${id}?language=en-US`);

  const resCredit = await axios.get(`/${type}/${id}/credits`);

  return {
    props: { initData: [resDetailMovie, resCredit], fallback: true },
  };
}

export default index;
