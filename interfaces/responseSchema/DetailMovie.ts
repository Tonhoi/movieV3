interface Genre {
  id: number;
  name: string;
}

interface Last_episode_to_air {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface Production_country {
  iso_3166_1: string;
  name: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

interface Spoken_language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface created_by {
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  profile_path: string;
}

interface DetailMovie {
  adult: boolean;
  backdrop_path: string;
  created_by: Array<created_by>;
  episode_run_time: Array<number>;
  first_air_date: string;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  in_production: boolean;
  languages: Array<string>;
  last_air_date: string;
  last_episode_to_air: Array<Last_episode_to_air>;
  name: string;
  networks: Array<Network>;
  next_episode_to_air: any;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Network>;
  production_countries: Array<Production_country>;
  seasons: Array<Season>;
  spoken_languages: Array<Spoken_language>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  title: string;
  original_title: string;
}

export default DetailMovie;
