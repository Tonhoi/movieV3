import { object, InferType, string, array, number } from "yup";

const TOPRATEMOVIE = object({
  backdrop_path: string().required(),
  first_air_date: string().required(),
  genre_ids: array(number().required()),
  id: number().required(),
  name: string().required(),
  origin_country: array(string().required()),
  original_language: string().required(),
  original_name: string().required(),
  overview: string().required(),
  popularity: number().required(),
  poster_path: string().required(),
  vote_average: number().required(),
  vote_count: number().required(),
});

export type TopRateMovie = InferType<typeof TOPRATEMOVIE>;
