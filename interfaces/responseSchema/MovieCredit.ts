export interface CreditProps<T1, T2> {
  cast: Array<T1>;
  crew: Array<T2>;
  id: number;
}

export interface CastProps {
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

export interface CrewProps {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface MoviesForActorProps {
  adult: boolean;
  backdrop_path: string;
  character: string;
  credit_id: string;
  episode_count: number;
  first_air_date: string;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  order: number;
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface moviesForCrewProps {
  adult: boolean;
  backdrop_path: string;
  credit_id: string;
  department: string;
  genre_ids: Array<number>;
  id: number;
  job: string;
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
