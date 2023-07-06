import { Box, Divider, Stack, Typography, styled, useTheme } from "@mui/material";

import StarIcon from "./Icons/StarIcon";

interface InfoMovieProps {
  isDescription?: boolean;
  data: any;
}

const InfoMovie = (props: InfoMovieProps) => {
  const { isDescription = false, data } = props;
  const theme = useTheme();

  return (
    <Container>
      <Stack className="info-wrapper">
        <StarIcon className={"star-icon"} />
        <Typography variant="body2" color={theme.palette.text_hover.main}>
          {data.vote_average}
        </Typography>
        <Divider orientation="vertical" light />

        <Typography variant="h6">{data.release_date}</Typography>
        {/* <Divider orientation="vertical" light />

        <Typography variant="h6">C13</Typography>
        <Divider orientation="vertical" light />

        <Typography variant="h6">24 Episodes</Typography> */}
      </Stack>

      {/* <StyledGenreMovie variant="h6">Chinese Mainland</StyledGenreMovie> */}

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

const StyledGenreMovie = styled(Typography)(({ theme }) => {
  return {
    marginTop: theme.spacing(1),
    padding: "2px 4px",
    width: "fit-content",

    background: theme.palette.opacity.white_008,
    borderRadius: "2px",
  };
});

export default InfoMovie;
