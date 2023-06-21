import { object, boolean, string, array, number, InferType } from "yup";

const POPULARMOVIESCHEMA = object({
  adult: boolean().required(),
  backdrop_path: string().required(),
  genre_ids: array(number().required()),
  id: number().required(),
  original_language: string().required(),
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

export type PopularMovie = InferType<typeof POPULARMOVIESCHEMA>;
