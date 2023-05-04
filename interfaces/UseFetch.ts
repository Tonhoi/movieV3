import { AxiosError } from "axios";

type ResponseType<T> = {
  items: T[];
  total_pages: number;
  page: number;
};

type ResponseErrorType<T = any> = AxiosError<T>;

export type { ResponseType, ResponseErrorType };
