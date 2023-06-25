import PlayMovie, { PlayMoviePageProps } from "@/containers/PlayMovie/PlayMovie";
import axios from "@/axios.config";
import { RESPONSEDATA as ResponseData } from "@/interfaces/responseSchema/utils";
import { TYPE_PARAMS } from "@/apis";

const index = (props: PlayMoviePageProps) => {
  return <PlayMovie {...props} />;
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
    // console.log("🚀 ~ file: [id].tsx:12 ~ getStaticPaths ~ paths:", paths);
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
  const resRecomendations = await axios.get(`/movie/${id}/recommendations`, {
    params: {
      language: "en-US",
      page: "1",
    },
  });
  const resDetailMovie = await axios.get(`/${type}/${id}?language=en-US`);

  return {
    props: { initData: [resRecomendations, resDetailMovie] },
  };
}

export default index;
