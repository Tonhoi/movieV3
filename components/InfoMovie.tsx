import { Box, Divider, Stack, Typography, styled, useTheme } from "@mui/material";

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
      <Typography variant="subtitle1">{data.name}</Typography>

      <Stack className="info-wrapper">
        <StarIcon className={"star-icon"} color={"inherit"} />
        <Typography variant="body2" color={theme.palette.text_hover.main}>
          {data.vote_average}
        </Typography>

        <Divider orientation="vertical" light />
      </Stack>

      <Typography variant="h6" className={`description ${isDescription ? "active" : ""}`}>
        {data.overview}
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .info-wrapper"]: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginTop: 8,
      color: "#1CC749",

      ["& .star-icon"]: {
        width: 12,
        height: 12,

        cursor: "pointer",

        ["&:hover"]: { opacity: 0.8, transition: "opacity linear 0.3s" },
      },
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
