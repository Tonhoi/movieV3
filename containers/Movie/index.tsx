import { useCallback, useMemo } from "react";
import { Box, Grid, styled, Container as MuiContainer } from "@mui/material";
import useSWR from "swr";
import { get } from "lodash";

import { CardItem } from "@/components";
import { IPage, UpComingMovie, responseSchema } from "@/interfaces";
import { useParams } from "@/hooks/useParams";
import Pagination from "@/components/Pagination";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";

export type MoviePageProps = IPage<[responseSchema<UpComingMovie>]>;

const Movie = ({ initData }: MoviePageProps) => {
  const dataDiscoverMovie = get(initData, "0");

  const { total_pages, page } = dataDiscoverMovie;

  const { params, setParams } = useParams({
    initState: {
      page,
    },
  });

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS["discover_movie"], {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: params.page,
      sort_by: "popularity.desc",
    })
  );

  const renderMovie = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: any) => (
      <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"}>
        <CardItem data={data} animation />
      </Grid>
    ));
  }, [data]);

  const handlePagination = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      setParams({
        page,
      });
    },
    []
  );

  return (
    <MuiContainer>
      <Container>
        <Grid container columns={15} spacing={3}>
          {renderMovie}
        </Grid>

        <Pagination
          count={total_pages as number}
          onChange={handlePagination}
          defaultPage={+params.page}
        />
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: theme.spacing(10),
  };
});

export default Movie;
