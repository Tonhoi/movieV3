import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";

import { CardItemBase, PlayIcon } from "@/components";
import { PopularMovie } from "@/interfaces/responseSchema/popularMovie";
import usePoster from "@/hooks/usePoster";
import { useRouter } from "next/router";
import { AiringToday } from "@/interfaces/responseSchema/airingToday";

interface CardItem3Props extends BoxProps {
  data: any;
}

const CardItem3 = ({ data, ...restProps }: CardItem3Props) => {
  const { poster_path, title, popularity, id, original_name, name } = data;
  const router = useRouter();
  const poster = usePoster(poster_path);

  return (
    <Container
      poster_path={poster}
      onClick={() => router.push(`/detail/${title ? "movie" : "tv"}/${id}`)}
      {...restProps}
    >
      <CardItemBase>
        <Box className={"card-image"}>
          <PlayIcon className="play-icon" />

          <Stack className="card-content">
            <Typography variant={"subtitle1"} className="title">
              {title ?? original_name ?? name}
            </Typography>
            <Typography variant={"subtitle2"} className={"subtitle"}>
              {popularity} Viewer
            </Typography>
          </Stack>
        </Box>
      </CardItemBase>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster_path",
})<{ poster_path: string }>(({ poster_path }) => {
  return {
    ["& .card-image"]: {
      aspectRatio: "300 / 160",
      borderRadius: "12px",

      backgroundImage: `url(${poster_path})`,

      [":hover"]: {
        filter: "contrast(0.9)",

        ["& .play-icon"]: {
          opacity: 1,
        },
      },

      ["& .play-icon"]: {
        position: "relative",
        left: 12,
        top: 6,

        width: 50,
        height: 70,

        opacity: 0,
        transition: "all linear 0.1s",
      },

      ["& .card-content"]: {
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 2,

        width: "100%",
        padding: "30px 8px 15px",
        gap: "4px",

        backgroundImage:
          "linear-gradient(transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))",

        ["& .title"]: {
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        },
      },
    },
  };
});

export default CardItem3;
