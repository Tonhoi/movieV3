import queryString from "query-string";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";

import pick from "lodash/pick";
import omit from "lodash/omit";
import isEqual from "lodash/isEqual";

import { isEmpty, unset } from "lodash";
import { transformUrl } from "@/libs";

interface UseParamsProps {
  initState?: {
    [key: string]: any;
  };
  callback?: (params: object) => void;
  excludeKeys?: string[];
  isUpdateRouter?: boolean;
  isShallow?: boolean;
  isScroll?: boolean;
}

const useParams = (props: UseParamsProps) => {
  const {
    initState = {},
    callback = () => {},
    excludeKeys = [],
    isScroll = false,
    isShallow = true,
    isUpdateRouter = true,
  } = props;

  const router = useRouter();
  const [params, setParams] = useState(() => {
    const initParams = { ...initState, ...router.query };

    Object.keys(initParams).forEach((key) => {
      if (!initParams[key]) {
        unset(initParams, key);
      }
    });

    return initParams;
  });
  const paramsRef = useRef(params);

  const prevParamsRef = useRef<{
    [x: string]: any;
  }>();

  //* Trigger callback
  useEffect(() => {
    if (isEqual(prevParamsRef.current, params)) return;

    callback(params);
  }, [params]);

  //* Update pathname
  useEffect(() => {
    if (isEqual(prevParamsRef.current, params)) return;

    if (!isUpdateRouter) return;

    const searchParams = omit(params, excludeKeys);

    // const { url } = queryString.parseUrl(router.asPath);
    const url = router.asPath;

    let pathname = url;

    if (!isEmpty(searchParams)) {
      pathname = transformUrl(url, searchParams);
    }

    router.push(pathname, pathname, {
      shallow: isShallow,
      scroll: isScroll,
    });
  }, [params]);

  useEffect(() => {
    prevParamsRef.current = params;
  }, [params]);

  const setParamsHandler = useCallback((newParams: object) => {
    setParams((prev) => {
      const newState = {
        ...prev,
        ...newParams,
      };

      paramsRef.current = newState;

      return newState;
    });
  }, []);

  const resetParams = useCallback(() => {
    const whiteList = ["limit", "use_cache", "offset"];

    const defaultParams = {
      // limit: 25,
      // offset: 0,
      // with_count: true,
    };

    setParams({ ...defaultParams, ...pick(paramsRef.current, whiteList) });
  }, []);

  return {
    router,
    params,
    setParams: setParamsHandler,
    resetParams,
  };
};

export default useParams;
