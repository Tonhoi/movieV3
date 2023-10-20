import useSWR from "swr";
import { get } from "lodash";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Grid, Container as MuiContainer } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useParams } from "@/hooks";
import { TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";
import { CardItem, Pagination } from "@/components";
import { GENRES, MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import { Slider } from "@/components";
import { MoviePageProps } from "@/pages/movie";
import { TvPageProps } from "@/pages/tv";
import AdvancedFilter from "./components/AdvancedFilter";
import GenresMovie from "./components/GenresMovie";

const Movie = ({ initData }: MoviePageProps | TvPageProps) => {
  const dataGenres: Array<GENRES> = get(initData, "[0].genres") || [];
  const type = get(initData, "[1].type");
  const router = useRouter();
  const { query, pathname } = router;

  const { params, setParams } = useParams({
    initState: {
      ["page"]: "",
      ["language"]: "",
      ["with_original_language"]: "",
      ["with_genres"]: "",
      ["year"]: "",
      ["first_air_date_year"]: "",
      ["vote_average.gte"]: "",
      ["vote_average.lte"]: "",
    },
  });

  const { data, isLoading } = useSWR(
    transformUrl(
      TYPE_PARAMS[pathname.includes("movie") ? "discover_movie" : "discover_tv"],
      {
        page: query.page,
        language: query["language"],
        with_original_language: query["language"]?.slice(0, 2),
        with_genres: query.with_genres,
        year: query.year,
        first_air_date_year: query.first_air_date_year,
        ["vote_average.gte"]: query["vote_average.gte"],
        ["vote_average.lte"]: query["vote_average.lte"],
      }
    )
  );

  const handlePagination = (event: React.ChangeEvent<unknown>, page: number) => {
    setParams({
      page,
    });
  };

  const renderMovie = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: MOVIESCHEMA & TVSCHEMA) => (
      <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"}>
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

  return (
    <Fragment>
      <Slider />

      <MuiContainer>
        <GenresMovie data={dataGenres} setParams={setParams} />

        <AdvancedFilter setParams={setParams} type={type} />

        <Grid container columns={15} spacing={3}>
          {isLoading
            ? Array(20)
                .fill(null)
                .map((el, idx) => (
                  <Grid item lg={3} md={3} sm={5} xs={7.5} key={idx}>
                    <Skeleton
                      style={{
                        aspectRatio: "206 / 301",
                      }}
                    />
                  </Grid>
                ))
            : renderMovie}
        </Grid>

        <Pagination
          count={data?.total_pages as number}
          onChange={handlePagination}
          defaultPage={data?.page}
          className={data?.results.length == 0 ? "active" : ""}
        />
      </MuiContainer>
    </Fragment>
  );
};

export default Movie;
