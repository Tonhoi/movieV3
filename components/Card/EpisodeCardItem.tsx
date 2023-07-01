import { Box, Stack, Typography, styled } from "@mui/material";
import CardItemBase from "./CardItemBase";
import Image from "../Image";

import cardImageDemo from "@/public/image/demoImageCard.jpg";
import usePoster from "@/hooks/usePoster";

interface EpisodeCardItemProps {
  data: any;
}

const EpisodeCardItem = ({ data }: EpisodeCardItemProps) => {
  const posterPath = usePoster(data?.still_path);

  return (
    <Container>
      <CardItemBase>
        <Box className={"card-image"}>
          <Image src={posterPath} alt={""} loading="lazy" />
        </Box>
      </CardItemBase>

      <Stack className={"card-content"}>
        <Typography variant={"body2"} className={"card-title"}>
          Episode {data.episode_number}
        </Typography>
        <Typography variant={"h5"} className={"card-subtitle"}>
          {data.name}
        </Typography>
        <Typography variant={"subtitle2"} className={"card-vote"}>
          vote count: {data.vote_count}
        </Typography>
        <Typography variant={"subtitle2"} className={"card-date"}>
          {data.air_date}
        </Typography>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    gap: "12px",
    cursor: "pointer",

    [theme.breakpoints.down("md")]: {
      minWidth: 370,
    },

    ["&:hover"]: {
      opacity: 0.9,
      transition: "opacity linear 0.2s",
    },

    ["& .card-image"]: {
      width: 140,
      height: 95,
      borderRadius: "10px",
      overflow: "hidden",
    },

    ["& .card-content"]: {
      ["& .card-title"]: {
        marginBottom: 4,
      },

      ["& .card-subtitle"]: {
        marginBottom: 4,
        ["&:hover"]: {
          color: "#1CC749",
        },
      },

      ["& .card-vote"]: {
        marginBottom: 2,
        color: "#909090",
      },

      ["& .card-date"]: {
        color: "#909090",
      },
    },
  };
});

export default EpisodeCardItem;
