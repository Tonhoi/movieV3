import { InferType, array, number, object, string } from "yup";

const AIRINGTODAY = object({
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

export type AiringToday = InferType<typeof AIRINGTODAY>;
