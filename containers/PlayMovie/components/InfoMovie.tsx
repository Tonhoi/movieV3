import { Box, Typography, styled, useTheme } from "@mui/material";

import StarIcon from "../../../components/common/Icons/StarIcon";
import { EpisodeProps } from "@/interfaces/responseSchema/episode";
import { memo } from "react";

interface InfoMovieProps {
  isDescription?: boolean;
  data: EpisodeProps;
}

const InfoMovie = (props: InfoMovieProps) => {
  const { isDescription = false, data } = props;
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="subtitle1" className="name-movie">
        {data?.name ?? "Đang cập nhập ..."}
      </Typography>

      <Typography variant="body2" color={theme.palette.text_color.hover}>
        <StarIcon className={"star-icon"} color={"inherit"} />
        {data?.vote_average ?? 0}
      </Typography>

      <Typography variant="h6" className={`description ${isDescription ? "active" : ""}`}>
        {data?.overview ?? "Đang cập nhập ..."}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    color: theme.palette.text_color.main,
    ["& .name-movie"]: {
      marginBottom: 8,
    },

    ["& .star-icon"]: {
      position: "relative",
      top: 1,
      marginRight: 2,
      width: 12,
      height: 12,
    },

    ["& .description"]: {
      marginTop: theme.spacing(1),

      display: "-webkit-box",
      maxWidth: "100%",
      WebkitLineClamp: 5,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",

      ["&.active"]: {
        display: "none",
      },
    },
  };
});

export default memo(InfoMovie);
