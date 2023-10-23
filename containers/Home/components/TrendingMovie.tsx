import { Box, styled } from "@mui/material";

import { TopTrendingCarditem } from "@/components";
import { MovieProps } from "@/interfaces/responseSchema/utils";
import HeadingMovie from "./HeadingMovie";

interface TrendingMovieProps {
  data: Array<MovieProps>;
}

const TrendingMovie = ({ data }: TrendingMovieProps) => {
  return (
    <Container>
      <HeadingMovie title="Bảng xếp hạng" />

      <Box className={"movie-list"}>
        {data &&
          data.map((el, idx) => (
            <TopTrendingCarditem key={el.id} data={el} idx={idx} className="movie-item" />
          ))}
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .movie-list"]: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "0.75rem",

      [theme.breakpoints.down("md")]: {
        display: "flex",

        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",

        ["&::-webkit-scrollbar"]: {
          display: "none",
        },
      },

      ["& .movie-item:first-of-type"]: {
        gridRow: "span 2",
        gridColumn: "span 2",
      },
    },
  };
});

export default TrendingMovie;