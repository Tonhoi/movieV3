import { Box, Stack, Typography, styled } from "@mui/material";
import CardItemBase from "./CardItemBase";
import Image from "../Image";

import usePoster from "@/hooks/usePoster";
import Link from "../Link";
import { useRouter } from "next/router";

interface EpisodeCardItemProps {
  still_path: string;
  episode_number: number;
  name: string;
  vote_count: number;
  air_date: string;
  idx: number;
}

const EpisodeCardItem = (props: EpisodeCardItemProps) => {
  const { still_path, episode_number, name, vote_count, air_date, idx } = props;
  const posterPath = usePoster(still_path);

  const { query } = useRouter();

  return (
    <Container
      href={`/play/${query.type}/${query.id}?episode=${idx}&season=${query.season}`}
      className={`${String(episode_number) == query.episode ? "active" : ""}`}
    >
      <CardItemBase>
        <Box className={"card-image"}>
          <Image src={posterPath} alt={""} loading="lazy" />
        </Box>
      </CardItemBase>

      <Stack className={"card-content"}>
        <Typography variant={"body2"} className={"card-title"}>
          Episode {episode_number}
        </Typography>
        <Typography variant={"h5"} className={"card-subtitle"}>
          {name}
        </Typography>
        <Typography variant={"subtitle2"} className={"card-vote"}>
          vote count: {vote_count}
        </Typography>
        <Typography variant={"subtitle2"} className={"card-date"}>
          {air_date}
        </Typography>
      </Stack>
    </Container>
  );
};

const Container = styled(Link)(({ theme }) => {
  return {
    display: "flex",
    gap: "12px",
    cursor: "pointer",
    color: theme.palette.common.white,
    width: "100%",

    ["&.active"]: {
      backgroundColor: "#1CC749",
      padding: "8px",
      borderRadius: "4px",
    },

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
