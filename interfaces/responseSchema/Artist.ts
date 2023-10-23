import { MovieProps } from "./utils";

export interface ArtistListProps {
  adult: string;
  gender: number;
  id: number;
  known_for: Array<MovieProps>;
  known_for_department: string;
  media_type: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface ArtistDetailProps {
  adult: boolean;
  also_known_as: Array<string>;
  biography: string;
  birthday: string;
  deathday: string;
  gender: number;
  homepage: string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}
