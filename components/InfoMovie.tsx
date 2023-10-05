import { Box, Typography, styled, useTheme } from "@mui/material";

import StarIcon from "./Icons/StarIcon";
import { EPISODESCHEMA } from "@/interfaces/responseSchema/episode";

interface InfoMovieProps {
  isDescription?: boolean;
  data: EPISODESCHEMA;
}

const InfoMovie = (props: InfoMovieProps) => {
  const { isDescription = false, data } = props;
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="subtitle1" className="name-movie">
        {data.name}
      </Typography>

      <Typography variant="body2" color={theme.palette.text_hover.main}>
        <StarIcon className={"star-icon"} color={"inherit"} />
        {data.vote_average}
      </Typography>

      <Typography variant="h6" className={`description ${isDescription ? "active" : ""}`}>
        {data.overview}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
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

export default InfoMovie;
