import { memo } from "react";
import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { PlayIcon, SaveIcon, StarIcon, CardItemBase } from "@/components";
import usePoster from "@/hooks/usePoster";

import posterAvailable from "@/public/image/no-poster-available.jpg";

interface CardItemProps extends BoxProps {
  vote_average: number;
  poster_path: string;
  id: string;

  animation?: boolean;
  original_name?: string;
  name?: string;
  title?: string;
}
const CardItem = (props: CardItemProps) => {
  const {
    animation = false,
    original_name,
    name,
    vote_average,
    poster_path,
    title,
    id,
    ...resProps
  } = props;

  const poster = usePoster(poster_path);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${title ? "movie" : "tv"}/${id}`);
  };

  return (
    <CardItemBase>
      <Container
        className={animation ? "active" : ""}
        poster_path={poster}
        onClick={handleClick}
        {...resProps}
      >
        <Box className="card-image">
          <PlayIcon className={"icon icon-play"} />
          <SaveIcon className={"icon icon-save"} />

          <Stack className={"vote-average"}>
            <StarIcon className={"star-icon"} />

            <Typography variant="body2" className="viewer-count">
              {vote_average}
            </Typography>
          </Stack>
        </Box>

        <Typography variant={"subtitle1"} className="card-title">
          {name ?? original_name ?? title}
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster_path",
})<{ poster_path: string }>(({ poster_path, theme }) => {
  return {
    ["&:hover"]: {
      ["& .card-title"]: {
        color: theme.palette.text_color.hover,
      },

      ["&.active .icon"]: {
        display: "block",
      },
    },

    ["& .card-image"]: {
      backgroundImage: `url(${poster_path}), url(${posterAvailable.src})`,
      aspectRatio: "172 / 230",
      borderRadius: 4,

      ["& .star-icon"]: {
        width: 13,
        height: 13,
        color: "#1cc749",
      },

      ["& .vote-average"]: {
        position: "absolute",
        bottom: 10,
        left: 8,
        zIndex: 2,

        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        color: "#fff",
      },

      ["& .icon"]: {
        position: "absolute",
        display: "none",
        width: 35,
        height: 35,

        ["&-play"]: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },

        ["&-save"]: {
          bottom: 10,
          right: 10,
          zIndex: 2,
        },
      },
    },

    ["& .card-title"]: {
      marginTop: theme.spacing(1),

      // text truncate
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      color: theme.palette.text_color.main,
    },
  };
});

export default memo(CardItem);
