import { Box, Typography, styled } from "@mui/material";

import { PlayIcon, SaveIcon, CardItemBase } from "@/components";

import cardDemo from "@/public/image/card_image_demo.webp";

const ContentCastCardItem = () => {
  return (
    <CardItemBase>
      <Container>
        <StyledImageBackground className="card-image">
          <PlayIcon className="icon icon-play" />
          <SaveIcon className="icon icon-save" />
          <Typography variant={"h5"} className="episode-movie">
            24 Episodes
          </Typography>
        </StyledImageBackground>
        <Typography variant={"body1"} className="title">
          Our Secrets
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    transform: "scale(1)",
    transition: "transform linear 0.2s",

    ["& .title"]: {
      position: "relative",
      wordBreak: "break-word",
      zIndex: 2,
    },

    ["&:hover"]: {
      transform: "scale(1.05)",

      ["& .icon"]: {
        display: "block",
      },

      ["& .title"]: {
        color: theme.palette.text_hover.main,
      },
    },
  };
});

const StyledImageBackground = styled(Box)(() => {
  return {
    backgroundImage: `url(${cardDemo.src})`,
    aspectRatio: "181 / 242",
    cursor: "pointer",
    borderRadius: "2px",

    ["&:hover"]: {
      ["&:after"]: {
        height: 84,
        backgroundImage:
          "linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 80%)",
      },
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

    ["& .episode-movie"]: {
      position: "absolute",
      bottom: 10,
      left: 10,
      zIndex: 2,
    },
  };
});

export default ContentCastCardItem;
