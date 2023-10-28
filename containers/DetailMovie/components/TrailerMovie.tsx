import { memo } from "react";
import { Box, styled, Skeleton } from "@mui/material";
import { useRouter } from "next/router";

import { Embeded, Overlay } from "@/components/common";

interface TrailerMovieProps {
  isOpenTrailerMovie: boolean;
  handleCloseTrailerMovie: () => void;
}

const TrailerMovie = (props: TrailerMovieProps) => {
  const { isOpenTrailerMovie, handleCloseTrailerMovie } = props;
  const { query } = useRouter();
  const { id, episode, season, type } = query;

  return (
    <Container>
      <Overlay
        className={isOpenTrailerMovie ? "active" : ""}
        backgroundColor="dark_60"
        onClick={handleCloseTrailerMovie}
      />

      {isOpenTrailerMovie && (
        <Box className={`trailer-movie-wrapper ${isOpenTrailerMovie ? "active" : ""}`}>
          <Embeded
            id={id}
            episode={episode}
            season={season}
            trailer
            type={type}
            className="embeded"
          />

          <Skeleton variant="rounded" width={"100%"} height={400} className="skeleton" />
        </Box>
      )}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .trailer-movie-wrapper"]: {
      position: "fixed",
      top: "50%",
      left: "50%",
      zIndex: 1001,
      transform: "translate(-50%, -50%)",
      width: 900,
      height: 400,
      maxWidth: "calc(100% - 24px)",
      display: "none",

      ["&.active"]: {
        display: "block",
      },

      ["& .embeded"]: {
        position: "absolute",
        zIndex: 9,
      },

      ["& .skeleton"]: {
        backgroundColor: theme.palette.common.white,
      },
    },
  };
});

export default memo(TrailerMovie);
