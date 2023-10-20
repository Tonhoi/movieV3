import { useCallback, useMemo } from "react";
import { Box, Stack, Typography, styled, Container as MuiContainer } from "@mui/material";
import useSWR from "swr";
import { get } from "lodash";

import { Link } from "@/components";
import Pagination from "@/components/Pagination";
import SearchItem from "./components/SearchItem";
import { useParams } from "@/hooks";
import { transformUrl } from "@/libs";
import Skeleton from "./components/Skeleton";
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
    if (typeof data == "undefined") return null;

    return data.results.map(
      (data: TVSCHEMA & MOVIESCHEMA & { media_type: string }, idx: number) => (
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
      <Stack className={"search-header"}>
        <Typography variant={"subtitle1"} component={"span"}>
          Có {data?.total_results} kết quả tìm kiếm dựa trên từ khóa “{router.query.query}
          ”
        </Typography>

        <Box className={"sub-title"}>
          <Typography variant={"h5"} component={"span"} color={"rgb(130, 131, 135)"}>
            Có vấn đề về kết quả tìm kiếm?
          </Typography>

          <Link href={"/search"} underline="hover">
            <Typography
              variant={"h5"}
              component={"span"}
              marginLeft={"4px"}
              color={"#1CC749"}
            >
              Gửi phản hồi
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
      padding: "24px 16px",
    },

    ["& .pagination"]: {
      marginTop: theme.spacing(2),
    },
  };
});

export default Search;
