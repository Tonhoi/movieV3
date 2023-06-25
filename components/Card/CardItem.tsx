import { Box, BoxProps, Stack, Typography, styled } from "@mui/material";

import CardItemBase from "./CardItemBase";
import PlayIcon from "../Icons/PlayIcon";
import SaveIcon from "../Icons/SaveIcon";
import StarIcon from "../Icons/StarIcon";
import usePoster from "@/hooks/usePoster";
import { useRouter } from "next/router";
import { memo } from "react";

interface CardItemProps extends BoxProps {
  animation?: boolean;
  data: any;
}

const CardItem = ({ animation = false, data, ...resProps }: CardItemProps) => {
  const { original_name, name, vote_average, poster_path, title, id } = data;

  const poster = usePoster(poster_path);
  const router = useRouter();

  return (
    <CardItemBase>
      <Container
        className={animation ? "active" : ""}
        onClick={() => router.push(`/detail/${title ? "movie" : "tv"}/${id}`)}
        {...resProps}
      >
        <StyledCardImage className="card-image" poster_path={poster}>
          <PlayIcon className={`icon icon-play ${animation ? "active" : ""}`} />
          <SaveIcon className={`icon icon-save ${animation ? "active" : ""}`} />

          <Stack className={"vote-average"}>
            <StarIcon className={"star-icon"} />
            <Typography variant="body2" className="viewer-count">
              {vote_average}
            </Typography>
          </Stack>
        </StyledCardImage>

        <Typography variant={"subtitle1"} className="card-title">
          {name ?? original_name ?? title}
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    transform: "scale(1)",
    transition: "transform linear 0.2s",

    ["& .card-title"]: {
      marginTop: theme.spacing(1),
    },

    ["&:hover"]: {
      ["& .card-title"]: {
        color: theme.palette.text_hover.main,
      },

      ["& .icon.active"]: {
        display: "block",
      },

      ["&.active"]: {
        transform: "scale(1.05)",
      },
    },
  };
});

const StyledCardImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster_path",
})<{ poster_path: string }>(({ poster_path, theme }) => {
  return {
    backgroundImage: `url(${poster_path})`,
    aspectRatio: "172 / 230",
    borderRadius: "4px",
    ["& .star-icon"]: {
      width: 13,
      height: 13,
    },

    ["& .vote-average"]: {
      position: "absolute",
      bottom: 10,
      left: 8,
      zIndex: 2,
      flexDirection: "row",
      alignItems: "center",
      gap: 4,

      color: theme.palette.common.white,
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
  };
});

export default memo(CardItem);
