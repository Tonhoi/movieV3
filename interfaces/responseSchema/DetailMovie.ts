import { InferType, array, boolean, mixed, number, object, string } from "yup";

const genre = object({
  id: number().required(),
  name: string().required(),
});

const last_episode_to_air = object({
  air_date: string().required(),
  episode_number: number().required(),
  id: number().required(),
  name: string().required(),
  overview: string().required(),
  production_code: string().required(),
  runtime: number().required(),
  season_number: number().required(),
  show_id: number().required(),
  still_path: string().required(),
  vote_average: number().required(),
  vote_count: number().required(),
});

const network = object({
  id: number().required(),
  logo_path: string().required(),
  name: string().required(),
  origin_country: string().required(),
});

const production_country = object({
  iso_3166_1: string().required(),
  name: string().required(),
});

const season = object({
  air_date: string().required(),
  episode_count: number().required(),
  id: number().required(),
  name: string().required(),
  overview: string().required(),
  poster_path: string().required(),
  season_number: number().required(),
});

const spoken_language = object({
  english_name: string().required(),
  iso_639_1: string().required(),
  name: string().required(),
});

const DETAILMOVIE = object({
  adult: boolean().required(),
  backdrop_path: string().required(),
  created_by: array(mixed()),
  episode_run_time: array(number().required()),
  first_air_date: string().required(),
  genres: array(genre),
  homepage: string().required(),
  id: number().required(),
  in_production: boolean().required(),
  languages: array(string().required()),
  last_air_date: string().required(),
  last_episode_to_air: array(last_episode_to_air),
  name: string().required(),
  networks: array(network),
  next_episode_to_air: mixed(),
  number_of_episodes: number().required(),
  number_of_seasons: number().required(),
  origin_country: array(string().required()),
  original_language: string().required(),
  original_name: string().required(),
  overview: string().required(),
  popularity: number().required(),
  poster_path: string().required(),
  production_companies: array(network),
  production_countries: array(production_country),
  seasons: array(season),
  spoken_languages: array(spoken_language),
  status: string().required(),
  tagline: string().required(),
  type: string().required(),
  vote_average: number().required(),
  vote_count: number().required(),
  title: string().required(),
  original_title: string().required(),
});

export type DetailMovie = InferType<typeof DETAILMOVIE>;
