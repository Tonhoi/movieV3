import { MOVIESCHEMA } from "./utils";

export interface PEOPLELISTSCHEMA {
  adult: string;
  gender: number;
  id: number;
  known_for: Array<MOVIESCHEMA>;
  known_for_department: string;
  media_type: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}
