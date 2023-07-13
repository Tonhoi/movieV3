import { styled, Box, Typography, Stack, Button } from "@mui/material";
import { useMemo } from "react";
import { useRouter } from "next/router";

import { Image, Overlay, TvIcon, PlayV2Icon, SaveV2Icon, Link } from "@/components";
import usePoster from "@/hooks/usePoster";
import useThumbnail from "@/hooks/useThumbnail";
import { CREDITSCHEMA } from "@/interfaces/responseSchema/credits";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";

interface HeadingDetailMovieProps {
  dataDetailMovie: DetailMovie;
  dataCreditMovie: CREDITSCHEMA;
  handleOpenTrailerMovie: () => void;
}

const HeadingDetailMovie = (props: HeadingDetailMovieProps) => {
  const { dataDetailMovie, dataCreditMovie, handleOpenTrailerMovie } = props;

  const { query, push } = useRouter();

  const poster = usePoster(dataDetailMovie?.poster_path);
  const thumbnail = useThumbnail(dataDetailMovie?.backdrop_path);

  const renderGenreMovie = useMemo(() => {
    if (typeof dataDetailMovie?.genres == "undefined") return null;

    return dataDetailMovie?.genres.map((data, idx: number) => {
      return (
        <Typography variant={"body1"} className="genre" key={idx}>
          {data.name}
        </Typography>
      );
    });
  }, [dataDetailMovie]);

  const renderCastMovie = useMemo(() => {
    if (typeof dataCreditMovie?.cast == "undefined") return null;

    return dataCreditMovie.cast.map((data, idx: number) => (
      <Typography
        variant={"body1"}
        className="artist"
        key={idx}
        onClick={() => push(`/actor-info/${data.id}`)}
      >
        {data.name}
      </Typography>
    ));
  }, [dataCreditMovie]);

  return (
    <Container className={"thumbnail"} thumbnail={thumbnail}>
      <Overlay className={"overlay active"} />

      <StyledContent className={"content"}>
        <Box className={"poster"}>
          <Image
            src={poster}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        <Stack gap={"20px"}>
          <Typography className={"title"} variant={"subtitle5"}>
            {dataDetailMovie?.title ??
              dataDetailMovie?.original_title ??
              dataDetailMovie?.name}
          </Typography>

          <Typography className={"description"} variant={"body1"}>
            {dataDetailMovie?.overview}
          </Typography>

          <Stack className="artist-list custom-scroll">
            Cast:
            {renderCastMovie}
          </Stack>

          <Stack className={"genre-list"}>{renderGenreMovie}</Stack>

          <Box className={"btn-wrapper"}>
            <Button
              variant={"contained"}
              className="btn btn-play"
              startIcon={<PlayV2Icon />}
              LinkComponent={Link}
              href={`/play/${query.type}/${query.id}`}
            >
              <Typography variant={"h5"}>Play</Typography>
            </Button>
            <Button
              variant={"contained"}
              className="btn btn-trailer"
              startIcon={<TvIcon />}
              onClick={handleOpenTrailerMovie}
            >
              <Typography variant={"h5"}>Watch Trailer</Typography>
            </Button>

            <Button variant={"contained"} className={"btn"} startIcon={<SaveV2Icon />}>
              <Typography variant={"h5"}>Watch Later</Typography>
            </Button>
          </Box>
        </Stack>
      </StyledContent>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "thumbnail",
})<{ thumbnail: string }>(({ thumbnail }) => {
  return {
    position: "relative",
    width: "100%",
    maxHeight: "100vh",
    aspectRatio: "1 / 1",

    backgroundImage: `url(${thumbnail})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

    ["& .overlay"]: {
      position: "absolute",
      background: "linear-gradient(rgba(52,73,94,.255),#333 90%)",
      zIndex: 1,
    },
  };
});

const StyledContent = styled(Stack)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 50,
    left: "50%",
    zIndex: 2,
    width: "100%",
    maxWidth: 1200,
    flexDirection: "row",
    padding: "0px 24px",
    gap: 30,
    transform: "translateX(-50%)",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      bottom: 0,
      flexDirection: "column",
      alignItems: "center",
      padding: "120px 24px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "120px 16px 50px",
    },

    ["& .poster"]: {
      position: "relative",
      width: "100%",
      minWidth: 300,
      maxWidth: 300,
      height: 450,
      borderRadius: "10px",
      overflow: "hidden",

      [theme.breakpoints.down("sm")]: {
        minWidth: "unset",
      },
    },

    ["& .description"]: {
      lineHeight: 1.6,
    },

    ["& :is(.artist-list, .genre-list)"]: {
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: theme.spacing(2),
      rowGap: 4,
      width: "fit-content",

      ["& .genre"]: {
        padding: "6px 16px",
        border: "1px solid #fff",
        borderRadius: "50px",
        width: "fit-content",
      },

      ["& .artist"]: {
        cursor: "pointer",
        ["&:hover"]: {
          color: "#1cc749",
        },
      },

      ["&.artist-list"]: {
        overflowY: "scroll",
        maxHeight: 140,
      },
    },

    ["& .btn"]: {
      padding: "8px 16px",
      width: "fit-content",
      marginRight: 10,
      marginBottom: 10,
      textTransform: "capitalize",
      backgroundColor: "#34495E",

      ["& svg"]: {
        width: 24,
        height: 24,
      },

      ["&.btn-play"]: {
        backgroundColor: "rgb(28, 199, 73)",
      },
    },
  };
});

export default HeadingDetailMovie;
