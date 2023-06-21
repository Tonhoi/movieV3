import { Box, Stack, Typography, styled } from "@mui/material";
import CardItemBase from "./CardItemBase";
import Image from "../Image";

import cardImageDemo from "@/public/image/demoImageCard.jpg";

const EpisodeCardItem = () => {
  return (
    <Container>
      <CardItemBase>
        <Box className={"card-image"}>
          <Image src={cardImageDemo} />
        </Box>
      </CardItemBase>

      <Stack className={"card-content"}>
        <Typography variant={"body2"} className={"card-title"}>
          Episode 1
        </Typography>
        <Typography variant={"h5"} className={"card-subtitle"}>
          Meet the Self-dependent Sahiba.
        </Typography>
        <Typography variant={"subtitle2"} className={"card-vote"}>
          vote count: 0
        </Typography>
        <Typography variant={"subtitle2"} className={"card-date"}>
          2023-01-04
        </Typography>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack)(() => {
  return {
    flexDirection: "row",
    gap: "12px",
    cursor: "pointer",

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
