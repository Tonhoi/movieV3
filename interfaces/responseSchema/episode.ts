import { Crew, guest_stars } from "./utils";

export interface EPISODESCHEMA {
  air_date: string;
  crew: Array<Crew>;
  episode_number: number;
  guest_stars: Array<guest_stars>;
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
