import { Box, BoxProps, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { CardItemBase, Image, Link } from "@/components";
import usePoster from "@/hooks/usePoster";

interface EpisodeCardItemProps extends BoxProps {
  still_path: string;
  episode_number: number;
  name: string;
  vote_count: number;
  air_date: string;
  idx: number;
}

const EpisodeCardItem = (props: EpisodeCardItemProps) => {
  const { still_path, episode_number, name, vote_count, air_date, idx, ...restProps } =
    props;
  const posterPath = usePoster(still_path);

  const { query } = useRouter();

  return (
    <CardItemBase zoom="disableZoom" {...restProps}>
      <Container
        href={`/play/${query.type}/${query.id}?episode=${idx}&season=${query.season}`}
        className={`${String(episode_number) == query.episode ? "active" : ""}`}
      >
        <Box className={"card-image"}>
          <Image src={posterPath} alt={""} loading="lazy" className={"img"} />
        </Box>

        <Box className={"card-content"}>
          <Typography variant={"body2"} className={"card-itle"}>
            Episode {episode_number}
          </Typography>
          <Typography variant={"h5"} className={"card-sub-title"}>
            {name}
          </Typography>
          <Typography variant={"subtitle2"} className={"card-vote"}>
            vote count: {vote_count}
          </Typography>
          <Typography variant={"subtitle2"} className={"card-date"}>
            {air_date}
          </Typography>
        </Box>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Link)(({ theme }) => {
  return {
    display: "flex",
    gap: 12,
    color: theme.palette.common.white,

    ["&.active"]: {
      backgroundColor: "#1CC749",
      padding: 8,
      borderRadius: 4,
    },

    ["&:hover"]: {
      opacity: 0.7,
      transition: "opacity linear 0.2s",
    },

    ["& .card-image"]: {
      width: 140,
      height: 95,
      flexShrink: 0,
      borderRadius: 10,
      overflow: "hidden",

      ["& .img"]: {
        objectFit: "cover",
      },
    },

    ["& .card-sub-title"]: {
      margin: "2px 0 4px",

      ["&:hover"]: {
        color: "#1CC749",
      },
    },

    ["& :where(.card-vote, .card-date)"]: {
      marginBottom: 2,
      color: "#909090",
    },
  };
});

export default EpisodeCardItem;
