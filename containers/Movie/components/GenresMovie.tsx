import { MouseEventHandler, useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { Box, Typography, styled } from "@mui/material";

import { GENRES } from "@/interfaces/responseSchema/utils";

interface GenresMovieProps {
  data: Array<GENRES>;
  setParams: (newParams: object) => void;
}

const GenresMovie = ({ data, setParams }: GenresMovieProps) => {
  const router = useRouter();
  const { query } = router;

  const handleSortWithGenre: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    const target = e.target as HTMLElement;
    const check = target.closest(".genre-btn");

    if (check) {
      const getIdGenre = check.getAttribute("id");

      if (getIdGenre) {
        return setParams({
          ["with_genres"]: getIdGenre,
        });
      }

      return setParams({
        page: 1,
        language: undefined,
        with_original_language: undefined,
        with_genres: undefined,
        year: undefined,
        first_air_date_year: undefined,
        ["vote_average.gte"]: undefined,
        ["vote_average.lte"]: undefined,
      });
    }
  }, []);

  const renderGenres = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.map((data: GENRES, idx: number) => {
      return (
        <Typography
          variant="subtitle2"
          key={idx}
          id={String(data.id)}
          className={`genre-btn ${query.with_genres == String(data.id) ? "active" : ""}`}
        >
          {data.name}
        </Typography>
      );
    });
  }, [data, router]);

  return (
    <Container onClick={handleSortWithGenre}>
      <Typography
        variant="subtitle2"
        className={`genre-btn ${!router.query.with_genres ? "active" : ""}`}
      >
        Tất cả phim
      </Typography>

      {renderGenres}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
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
  };
});

export default GenresMovie;