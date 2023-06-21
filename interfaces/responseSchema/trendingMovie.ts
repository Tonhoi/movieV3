import { InferType, object, string, number, array, boolean } from "yup";

const TRENDINGMOVIE = object({
  adult: boolean().required(),
  backdrop_path: string().required(),
  first_air_date: string().required(),
  genre_ids: array(number().required()),
  id: number().required(),
  media_type: string().required(),
  original_language: string().required(),
  original_name: string().required(),
  original_title: string().required(),
  overview: string().required(),
  popularity: number().required(),
  poster_path: string().required(),
  release_date: string().required(),
  title: string().required(),
  video: boolean().required(),
  vote_average: number().required(),
  vote_count: number().required(),
});

export type TrendingMovie = InferType<typeof TRENDINGMOVIE>;
