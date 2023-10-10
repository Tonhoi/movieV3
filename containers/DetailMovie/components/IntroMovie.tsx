import { memo, useMemo } from "react";
import { useRouter } from "next/router";
import { styled, Box, Typography, Stack, Button } from "@mui/material";

import { Image, TvIcon, PlayV2Icon, SaveV2Icon, Link } from "@/components";
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
  const { title, original_title, name, overview, poster_path, backdrop_path } =
    dataDetailMovie;

  const { query, push } = useRouter();

  const poster = usePoster(poster_path);
  const backdrop = useThumbnail(backdrop_path);

  const renderGenreMovie = useMemo(() => {
    if (typeof dataDetailMovie.genres == "undefined") return null;

    return dataDetailMovie.genres.map((data, idx: number) => {
      return (
        <Typography variant={"body1"} className="genre-item" key={idx}>
          {data.name}
        </Typography>
      );
    });
  }, [dataDetailMovie]);

  const renderCastMovie = useMemo(() => {
    if (typeof dataCreditMovie.cast == "undefined") return null;

    return dataCreditMovie.cast.map((el, idx: number) => (
      <Typography
        key={idx}
        variant={"body1"}
        className="artist-item"
        onClick={() => push(`/artist-info/${el.id}`)}
      >
        {el.name}
      </Typography>
    ));
  }, [dataCreditMovie]);

  return (
    <Container backdrop={backdrop}>
      <Box className={"poster"}>
        <Image src={poster} />
      </Box>

      <Box className="content">
        <Typography className={"title"} variant={"subtitle5"}>
          {title ?? original_title ?? name}
        </Typography>

        <Typography className={"description"} variant={"body1"}>
          {overview}
        </Typography>

        <Stack className="artist-list custom-scroll">
          Cast:
          {renderCastMovie}
        </Stack>

        <Stack className={"genre-list"}>{renderGenreMovie}</Stack>

        <Button
          variant={"contained"}
          href={`/play/${query.type}/${query.id}`}
          LinkComponent={Link}
          startIcon={<PlayV2Icon />}
          className="btn btn-play"
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
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backdrop",
})<{ backdrop: string }>(({ backdrop, theme }) => {
  return {
    position: "relative",
    width: "100%",
    maxHeight: "100vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 24px",

    aspectRatio: "1 / 1",
    backgroundImage: `url(${backdrop})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

    ["&:after"]: {
      content: `""`,
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: "linear-gradient(rgba(52,73,94,.255),#333 90%)",
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: "120px 24px 50px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "120px 16px 50px",
    },

    ["& .poster"]: {
      position: "relative",
      zIndex: 2,
      width: 300,
      height: 450,
      marginRight: 30,
      flexShrink: 0,

      ["& img"]: {
        objectFit: "contain",
      },

      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: "0px 0px 30px 0px",
      },
    },

    ["& .content"]: {
      zIndex: 2,
      width: "100%",
      maxWidth: 810,

      ["& .description"]: {
        lineHeight: 1.6,
        margin: "20px 0px",
      },

      ["& :is(.artist-list, .genre-list)"]: {
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: theme.spacing(2),
        rowGap: 4,

        ["&.genre-list"]: {
          margin: "20px 0px",
        },

        ["& .genre-item"]: {
          padding: "6px 16px",
          border: "1px solid #fff",
          borderRadius: 50,
        },

        ["& .artist-item"]: {
          ["&:hover"]: {
            cursor: "pointer",
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
        margin: "0px 10px 10px 0px",
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
    },
  };
});

export default memo(HeadingDetailMovie);
