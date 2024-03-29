export interface ResponeDataSchema {
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
}

export interface GenreProps {
  id: number;
  name: string;
}

export interface Paths {
  params: {
    type: string;
    id: string;
  };
}

export interface GuestStarProps {
  adult: boolean;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface TvProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: Array<number>;
  id: string;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
