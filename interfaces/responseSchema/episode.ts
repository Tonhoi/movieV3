import { CrewProps } from "./MovieCredit";
import { GuestStarProps } from "./utils";

export interface EpisodeProps {
  air_date: string;
  crew: Array<CrewProps>;
  episode_number: number;
  episode_type: string;
  guest_stars: Array<GuestStarProps>;
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
