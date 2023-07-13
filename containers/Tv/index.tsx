import { useCallback, useMemo } from "react";
import { Box, Grid, styled, Container as MuiContainer, Typography } from "@mui/material";
import useSWR from "swr";
import { useMeasure } from "react-use";
import { get } from "lodash";

import { CardItem } from "@/components";
import { IPage, responseSchema } from "@/interfaces";
import { useParams } from "@/hooks/useParams";
import Pagination from "@/components/Pagination";
import { TYPE_PARAMS } from "@/apis";
import { transformUrl } from "@/libs";
import Skeleton from "@/containers/Movie/Components/Skeleton";
import GenresFilter from "./Components/GenresFilter";
import Filter from "./Components/Filter";
import { GENRES, TVSCHEMA } from "@/interfaces/responseSchema/utils";

export type TvPageProps = IPage<[responseSchema<TVSCHEMA>, responseSchema<GENRES>]>;

const Tv = ({ initData }: TvPageProps) => {
  const { total_pages, page } = get(initData, "0");
  const dataGenres: Array<GENRES> = get(initData[1], "genres") || [];
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const { params, setParams } = useParams({
    initState: {
      ["page"]: 1,
      ["language"]: "",
      ["with_original_language"]: "",
      ["with_genres"]: "",
      ["first_air_date_year"]: "",
      ["vote_average.gte"]: "",
      ["vote_average.lte"]: "",
    },
  });

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS["discover_tv"], {
      page: params.page,
      language: params["language"],
      with_original_language: params["language"]?.slice(0, 2),
      with_genres: params.with_genres,
      ["first_air_date_year"]: params.first_air_date_year,
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

  const handleResetFilter = () => {
    setParams({
      page,
      ["language"]: undefined,
      ["with_genres"]: undefined,
      ["first_air_date_year"]: undefined,
      ["vote_average.gte"]: undefined,
      ["vote_average.lte"]: undefined,
    });
  };

  const renderTv = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: TVSCHEMA) => {
      const { id, name, original_name, poster_path, vote_average } = data;
      return (
        <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"}>
          <CardItem
            id={id}
            name={name}
            original_name={original_name}
            poster_path={poster_path}
            vote_average={vote_average}
            animation
            ref={ref}
          />
        </Grid>
      );
    });
  }, [data, params]);

  const renderGenres = useMemo(() => {
    if (typeof dataGenres == "undefined") return null;

    return dataGenres.map((data: GENRES, idx: number) => (
      <GenresFilter
        key={idx}
        onClick={() =>
          setParams({
            ["with_genres"]: data.id,
          })
        }
        name={data.name}
        id={data.id}
      />
    ));
  }, [dataGenres]);

  return (
    <MuiContainer>
      <Container>
        <Box className={"filter-wrapper"}>
          <Typography
            variant="subtitle2"
            className={`all-movie-btn ${!params.with_genres ? "active" : ""}`}
            onClick={handleResetFilter}
          >
            Tất cả phim
          </Typography>
          {renderGenres}
        </Box>

        <Filter setParams={setParams} />

        {isLoading ? (
          <Skeleton height={height} count={10} inline />
        ) : (
          <Grid container columns={15} spacing={3}>
            {renderTv}
          </Grid>
        )}

        <Pagination
          count={total_pages as number}
          onChange={handlePagination}
          defaultPage={+params.page}
          className={data?.results.length == 0 ? "active" : ""}
        />
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: theme.spacing(10),

    ["& .filter-wrapper"]: {
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

      ["& .all-movie-btn"]: {
        textAlign: "center",
        padding: "9px 8px",
        backgroundColor: "#8a84e9",
        cursor: "pointer",
        borderRadius: "4px",

        ["&.active"]: {
          backgroundColor: "#443ae7",
          transition: "all linear 0.2s",
        },
      },
    },
  };
});

export default Tv;
