import useSWR from "swr";
import { get } from "lodash";
import { useMeasure } from "react-use";
import { Fragment, MouseEventHandler, useCallback, useMemo } from "react";
import { Box, Grid, styled, Container as MuiContainer, Typography } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useParams } from "@/hooks";
import { TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";
import { CardItem, Pagination } from "@/components";
import { GENRES, MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import { Slider } from "@/compositions";
import { MoviePageProps } from "@/pages/movie";
import { TvPageProps } from "@/pages/tv";
import AdvancedFilter from "./Components/AdvancedFilter";

const Movie = ({ initData }: MoviePageProps | TvPageProps) => {
  const { total_pages, page } = get(initData, "0");
  const dataGenres: Array<GENRES> = get(initData, "[1].genres") || [];
  const type = get(initData, "[2].type");
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const { params, setParams, resetParams, router } = useParams({
    initState: {
      ["page"]: 1,
      ["language"]: "",
      ["with_original_language"]: "",
      ["with_genres"]: "",
      [type == "movie" ? "year" : "first_air_date_year"]: "",
      ["vote_average.gte"]: "",
      ["vote_average.lte"]: "",
    },
  });

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS[type == "movie" ? "discover_movie" : "discover_tv"], {
      page: params.page,
      language: params["language"],
      with_original_language: params["language"]?.slice(0, 2),
      with_genres: params.with_genres,
      [type == "movie" ? "year" : "first_air_date_year"]:
        type == "movie" ? params.year : params.first_air_date_year,
      ["vote_average.gte"]: params["vote_average.gte"],
      ["vote_average.lte"]: params["vote_average.lte"],
    })
  );

  const handlePagination = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      setParams({
        page,
      });
    },
    []
  );

  const handleSortWithGenre: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    const check = target.closest(".genre-btn:not(:nth-child(1))");
    const btnSeeMoreElement = target.closest(".genre-btn:nth-child(1)");

    if (btnSeeMoreElement) {
      resetParams();
      setParams({
        page,
      });
    } else if (check) {
      const getIdGenre = check.getAttribute("id");
      setParams({
        ["with_genres"]: getIdGenre,
      });
    }
  }, []);

  const renderMovie = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: MOVIESCHEMA & TVSCHEMA) => (
      <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"} ref={ref}>
        <CardItem
          vote_average={data.vote_average}
          poster_path={data.poster_path}
          title={data.title}
          id={data.id}
          name={data.name}
          original_name={data.original_name}
          animation
        />
      </Grid>
    ));
  }, [data]);

  const renderGenres = useMemo(() => {
    if (typeof dataGenres == "undefined") return null;

    return dataGenres.map((data: GENRES, idx: number) => {
      return (
        <Typography
          variant="subtitle2"
          key={idx}
          id={String(data.id)}
          className={`genre-btn ${
            router.query.with_genres == String(data.id) ? "active" : ""
          }`}
        >
          {data.name}
        </Typography>
      );
    });
  }, [dataGenres, router]);

  return (
    <Fragment>
      <Slider />

      <Container>
        <Box className={"genre-list"} onClick={handleSortWithGenre}>
          <Typography
            variant="subtitle2"
            className={`genre-btn ${!router.query.with_genres ? "active" : ""}`}
          >
            Tất cả phim
          </Typography>

          {renderGenres}
        </Box>

        <AdvancedFilter setParams={setParams} type={type} />

        <Grid container columns={15} spacing={3}>
          {isLoading
            ? Array(20)
                .fill(null)
                .map((el, idx) => (
                  <Grid item lg={3} md={3} sm={5} xs={7.5} key={idx}>
                    <Skeleton height={height} />
                  </Grid>
                ))
            : renderMovie}
        </Grid>

        <Pagination
          count={total_pages as number}
          onChange={handlePagination}
          defaultPage={+params.page}
          className={data?.results.length == 0 ? "active" : ""}
        />
      </Container>
    </Fragment>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    ["& .genre-list"]: {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gap: 16,

      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "row",
        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",
      },

      ["& .genre-btn"]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "9px 8px",
        borderRadius: 4,

        backgroundColor: "#8a84e9",
        color: theme.palette.common.white,
        textAlign: "center",
        cursor: "pointer",

        ["&:hover"]: {
          opacity: 0.8,
          transition: "opacity linear 0.2s",
        },

        ["&.active"]: {
          backgroundColor: "#443ae7",
          transition: "all linear 0.2s",
        },

        [theme.breakpoints.down("md")]: {
          width: "35%",
          flexShrink: 0,
          scrollSnapAlign: "start",
          scrollSnapStop: "always",
        },
      },
    },
  };
});

export default Movie;
