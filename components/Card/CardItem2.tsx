import { Box, Typography, styled } from "@mui/material";
import { PlayIcon, CardItemBase } from "@/components";

import cardImageDemo from "@/public/image/demoImageCard.jpg";
import useThumbnail from "@/hooks/useThumbnail";
import { memo } from "react";

import imageNotAvailable from "@/public/image/image_not_available.png";

interface CardItem2Props {
  data: any;
}

const CardItem2 = ({ data }: CardItem2Props) => {
  const { still_path, name, episode_number } = data;

  const stillPath = useThumbnail(still_path);

  return (
    <CardItemBase>
      <Container>
        <StyledCardImage className="card-image" stillPath={stillPath}>
          <PlayIcon className="play-icon" />
        </StyledCardImage>

        <Typography variant={"h5"} className="card-title">
          {name} Episode {episode_number}
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    transform: "scale(1)",
    cursor: "pointer",
    transition: "transform linear 0.2s",

    ["&:hover"]: {
      transform: "scale(1.05)",

      ["& .play-icon"]: {
        display: "block",
      },

      ["& .card-title"]: {
        color: theme.palette.text_hover.main,
      },
    },
  };
});

const StyledCardImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "stillPath",
})<{ stillPath: string }>(({ stillPath, theme }) => {
  return {
    backgroundImage: `url(${stillPath}), url(${imageNotAvailable.src})`,
    aspectRatio: "300 / 170",

    borderRadius: "2px",

    ["& .play-icon"]: {
      position: "absolute",
      bottom: 10,
      right: 10,
      zIndex: 2,

      display: "none",
      width: 34,
      height: 34,
    },
  };
});

export default memo(CardItem2);
