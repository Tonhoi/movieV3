import { useCallback, useMemo } from "react";
import { Box, styled, Container as MuiContainer } from "@mui/material";
import useSWR from "swr";
import { get } from "lodash";

import { Pagination } from "@/components/common";
import { useParams } from "@/hooks";
import { transformUrl } from "@/libs";
import { MovieProps, TvProps } from "@/interfaces/responseSchema/utils";
import { IPage, responseSchema } from "@/interfaces";
import { TYPE_PARAMS } from "@/apis";
import SearchItem from "./components/SearchItem";
import Skeleton from "./components/Skeleton";
import HeadingSearch from "./components/HeadingSearch";

export type SearchPageProps = IPage<[responseSchema<MovieProps & TvProps>]>;

const Search = ({ initData }: SearchPageProps) => {
  const dataSearch = get(initData, "0");
  const { total_pages, page } = dataSearch;

  const { params, setParams, router } = useParams({
    initState: {
      query: "",
      page,
    },
  });

  const handlePagination = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      setParams({
        page,
      });
    },
    [router]
  );

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS["search_multi"], {
      query: router.query.query,
      include_adult: false,
      language: "en-US",
      page: params.page,
    })
  );

  const renderItem = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map(
      (data: TvProps & MovieProps & { media_type: string }, idx: number) => (
        <SearchItem
          key={idx}
          name={data.name}
          first_air_date={data.first_air_date}
          overview={data.overview}
          original_name={data.original_name}
          title={data.title}
          release_date={data.release_date}
          poster_path={data.poster_path}
          media_type={data.media_type}
          id={data.id}
        />
      )
    );
  }, [data, router]);

  return (
    <Container>
      <HeadingSearch total_results={data?.total_results} />

      <MuiContainer maxWidth={"md"}>
        {isLoading ? <Skeleton count={10} /> : renderItem}
      </MuiContainer>

      <Pagination
        count={total_pages as number}
        onChange={handlePagination}
        defaultPage={+params.page}
        className={"pagination"}
      />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .pagination"]: {
      marginTop: theme.spacing(2),
    },
  };
});

export default Search;
