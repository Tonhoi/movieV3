import { InferType, array, boolean, number, object, string } from "yup";

const cast = object({
  adult: boolean().required(),
  character: string().required(),
  credit_id: string().required(),
  gender: number().required(),
  id: number().required(),
  known_for_department: string().required(),
  name: string().required(),
  order: number().required(),
  original_name: string().required(),
  popularity: number().required(),
  profile_path: string().required(),
});

const crew = object({
  adult: boolean().required(),
  credit_id: string().required(),
  department: string().required(),
  gender: number().required(),
  id: number().required(),
  job: string().required(),
  known_for_department: string().required(),
  name: string().required(),
  original_name: string().required(),
  popularity: number().required(),
  profile_path: string().nullable(),
});

const CREDIT = object({
  cast: array(cast),
  crew: array(crew),
  id: number().required(),
});

export type Credit = InferType<typeof CREDIT>;
