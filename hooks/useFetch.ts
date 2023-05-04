import useSWR, { SWRConfiguration } from "swr";
import { useCallback, useEffect, useRef, useState } from "react";
import { ResponseErrorType, ResponseType } from "@/interfaces/UseFetch";

type PageType = string | null | undefined;

const API_KEY = "9568cdb91fe0c79af33b87e59bb90d25";
const URL = "https://api.themoviedb.org/3/movie/now_playing";

const useFetch = <
  T = any,
  V extends ResponseType<T> = ResponseType<T>,
  Error = ResponseErrorType
>(
  key?: string,
  options?: SWRConfiguration
) => {
  const [data, setData] = useState<T[]>();
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pageRef = useRef<{
    previousPage?: PageType;
    currentPage?: PageType;
    nextPage?: PageType;
  }>({
    previousPage: null,
    currentPage: null,
    nextPage: null,
  });

  const [nextPage, setNextPage] = useState<PageType>(key);

  const {
    isValidating,
    data: resData,
    error,
    mutate,
  } = useSWR<V, Error>(nextPage, options);

  useEffect(() => {
    if (resData == undefined && isValidating) setIsLoading(true);

    if (isValidating) return;

    if (resData == undefined) return;

    const { page, items, total_pages } = resData;

    const previousPage = page - 1;
    const nextPage = page + 1;

    pageRef.current = {
      previousPage:
        previousPage > 0
          ? `${URL}?api_key=${API_KEY}&page=${previousPage}`
          : null,
      currentPage: `${URL}?api_key=${API_KEY}&page=${page}`,
      nextPage: `${URL}?api_key=${API_KEY}&page=${nextPage}`,
    };

    if (nextPage > total_pages) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }

    setData(items);
    setIsLoading(false);
  }, [resData, isValidating]);

  const changeKey = useCallback((newKey: string) => {
    setNextPage(newKey);
    setData(undefined);
    setIsLoading(true);
    setIsDone(false);
  }, []);

  const fetchNextPage = useCallback(() => {
    const nextPage = pageRef.current.nextPage;

    if (nextPage) {
      setNextPage(nextPage);
      setIsLoading(true);
    }
  }, []);

  const fetchPreviousPage = useCallback(() => {
    const previousPage = pageRef.current.previousPage;

    if (previousPage) {
      setNextPage(previousPage);
      setIsLoading(true);
    }
  }, []);

  const refreshData = useCallback(() => {
    mutate();
    setIsLoading(true);
  }, []);

  return {
    data,
    error,
    rawData: resData,
    pageState: pageRef.current,

    isDone,
    isLoading,
    isValidating,

    changeKey,
    refreshData,
    fetchNextPage,
    fetchPreviousPage,
  };
};
export default useFetch;
