import { Link } from "@/components";
import { Box, Stack, Typography, styled, Container as MuiContainer } from "@mui/material";

import { useCallback, useMemo } from "react";
import useSWR from "swr";

import Pagination from "@/components/Pagination";
import { get } from "lodash";
import usePoster from "@/hooks/usePoster";
import SearchItem from "./Components/SearchItem";
import { useParams } from "@/hooks/useParams";
import { transformUrl } from "@/libs";
import Skeleton from "./Components/Skeleton";

const Search = ({ initialData }: any) => {
  const dataSearch = get(initialData, "0");
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
    transformUrl("/search/multi", {
      query: router.query.query,
      include_adult: false,
      language: "en-US",
      page: params.page,
    })
  );

  const renderItem = useMemo(() => {
    if (typeof data?.results == "undefined") return null;

    return data.results.map((data: any, idx: number) => {
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
    });
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
        count={total_pages}
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
