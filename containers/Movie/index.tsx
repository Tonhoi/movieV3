import { useCallback, useMemo, useState } from "react";
import {
  Box,
  Grid,
  styled,
  Container as MuiContainer,
  Typography,
  Stack,
} from "@mui/material";
import useSWR from "swr";
import { get } from "lodash";

import { CardItem } from "@/components";
import { IPage, UpComingMovie, responseSchema } from "@/interfaces";
import { useParams } from "@/hooks/useParams";
import Pagination from "@/components/Pagination";
import { TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";

export type MoviePageProps = IPage<[responseSchema<UpComingMovie>, responseSchema<any>]>;

const Movie = ({ initData }: MoviePageProps) => {
  const dataDiscoverMovie = get(initData, "0");
  const dataGenres = get(initData[1], "genres");

  const [genresId, setGenresId] = useState<any>(dataGenres && dataGenres[0].id);

  const { total_pages, page } = dataDiscoverMovie;

  const { params, setParams } = useParams({
    initState: {
      page,
      ["release_date.gte"]: "",
      ["release_date.lte"]: "",
      ["vote_average.gte"]: "",
      ["vote_average.lte"]: "",
      ["with_genres"]: dataGenres && dataGenres[0].id,
      ["with_original_language"]: "",
    },
  });

  // release_date.gte=2002-03-09&release_date.lte=2023-07-01&vote_average.gte=0&vote_average.lte=10&with_genres=10759&with_original_language=en

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS["discover_movie"], {
      language: "vi-VN",
      // ["sort_by"]: "popularity.desc",
      page: params.page,
      ["release_date.gte"]: "2002-03-09",
      ["release_date.lte"]: "2023-07-01",
      ["vote_average.gte"]: 0,
      ["vote_average.lte"]: 10,
      ["with_genres"]: 12,
      ["with_original_language"]: "en",
      // include_adult: false,
      // include_video: false,
    })
  );
  console.log(data);

  const renderMovie = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: any) => (
      <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"}>
        <CardItem data={data} animation />
      </Grid>
    ));
  }, [data]);

  const renderGenres = useMemo(() => {
    if (typeof dataGenres == "undefined") return null;
    return dataGenres.map((data, idx: number) => (
      <Typography
        variant="subtitle2"
        className={"title-filter"}
        key={idx}
        onClick={() =>
          setParams({
            ["with_genres"]: data.id,
          })
        }
      >
        {data.name}
      </Typography>
    ));
  }, [dataGenres]);

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
        <Stack direction={"row"} alignItems={"center"} gap={2} flexWrap={"wrap"}>
          {renderGenres}
        </Stack>

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

    ["& .title-filter"]: {
      cursor: "pointer",
      padding: "9px 8px",
      backgroundColor: "#EF4444",
      color: theme.palette.common.white,
      borderRadius: "4px",
      width: "100%",
      maxWidth: 90,
      textAlign: "center",

      ["&:hover"]: {
        opacity: 0.8,
        transition: "opacity linear 0.2s",
      },
    },
  };
});

export default Movie;
