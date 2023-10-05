import { useCallback, useMemo } from "react";
import { Box, Stack, Typography, styled, Container as MuiContainer } from "@mui/material";
import useSWR from "swr";
import { get } from "lodash";

import { Link } from "@/components";
import Pagination from "@/components/Pagination";
import usePoster from "@/hooks/usePoster";
import SearchItem from "./Components/SearchItem";
import { useParams } from "@/hooks";
import { transformUrl } from "@/libs";
import Skeleton from "./Components/Skeleton";
import { MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import { IPage, responseSchema } from "@/interfaces";
import { TYPE_PARAMS } from "@/apis";

export type SearchPageProps = IPage<[responseSchema<MOVIESCHEMA & TVSCHEMA>]>;

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
    if (typeof data?.results == "undefined") return null;

    return data.results.map(
      (data: TVSCHEMA & MOVIESCHEMA & { media_type: string }, idx: number) => {
        const {
          poster_path,
          name,
          first_air_date,
          overview,
          original_name,
          title,
          release_date,
          media_type,
          id,
        } = data;

        const poster = usePoster(poster_path);

        return (
          <SearchItem
            name={name}
            first_air_date={first_air_date}
            overview={overview}
            original_name={original_name}
            title={title}
            release_date={release_date}
            poster={poster}
            media_type={media_type}
            id={id}
            key={idx}
          />
        );
      }
    );
  }, [data]);

  return (
    <Container>
      <Stack className={"search-header"}>
        <Box className={"title-wrapper"}>
          <Typography variant={"subtitle1"}>
            The following results are found based on your search
          </Typography>
          <Typography variant={"subtitle1"} color={"#fff"}>
            “{router.query.query}”
          </Typography>
        </Box>
        <Box className={"sub-title-wrapper"}>
          <Typography variant={"h5"} className={"sub-title"} color={"rgb(130, 131, 135)"}>
            Not happy with the search result?
          </Typography>
          <Link href={"/search"} underline="hover">
            <Typography className={"sub-title"} variant={"h5"} color={"#1CC749"}>
              Click for feedback
            </Typography>
          </Link>
        </Box>
      </Stack>

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
    ["& .search-header"]: {
      height: 200,
      alignItems: "center",
      justifyContent: "end",
      backgroundColor: "rgb(26, 28, 34)",

      ["& .title-wrapper"]: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "24px 0px 16px",
      },

      ["& .sub-title-wrapper"]: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        ["& .sub-title"]: {
          marginBottom: 24,
        },
      },
    },

    ["& .pagination"]: {
      marginTop: theme.spacing(2),
    },
  };
});

export default Search;
