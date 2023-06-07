import React from "react";
import { Box, Typography, styled } from "@mui/material";

import cardDemo from "@/public/image/card_image_demo.webp";
import PlayIcon from "@/components/Icons/PlayIcon";
import SaveIcon from "@/components/Icons/SaveIcon";

const ContextCastCardItem = () => {
  return (
    <Container>
      <StyledImageWrapper>
        <PlayIcon className="icon-play" />
        <SaveIcon className="icon-save" />
        <Typography variant={"h5"}>24 Episodes</Typography>
      </StyledImageWrapper>
      <Typography variant={"body1"} className="name-movie">
        Our Secrets
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    transform: "scale(1)",
    transition: "transform linear 0.2s",
    ["& .name-movie"]: {
      wordBreak: "break-word",
    },
    ["&:hover"]: {
      transform: "scale(1.05)",

      ["& svg"]: {
        display: "block",
      },

      ["& .name-movie"]: {
        color: "rgb(28, 199, 73)",
      },
    },
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    position: "relative",
    backgroundImage: `url(${cardDemo.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    aspectRatio: "181 / 242",
    cursor: "pointer",
    borderRadius: "2px",
    overflow: "hidden",

    ["&:after"]: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,

      height: 60,

      backgroundImage:
        "linear-gradient(0deg, rgba(10, 12, 15, 0.8) 0%, rgba(10, 12, 15, 0.74) 4%, rgba(10, 12, 15, 0.59) 17%, rgba(10, 12, 15, 0.4) 34%, rgba(10, 12, 15, 0.21) 55%, rgba(10, 12, 15, 0.06) 78%, rgba(10, 12, 15, 0) 100%)",
    },

    ["&:hover"]: {
      ["&:after"]: {
        height: 84,
        backgroundImage:
          "linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 80%)",
      },
    },

    ["& .icon-play"]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      display: "none",
      width: 35,
      height: 35,
    },

    ["& .icon-save"]: {
      position: "absolute",
      bottom: 10,
      right: 10,
      zIndex: 2,

      display: "none",
      width: 35,
      height: 35,
    },

    ["& > h5"]: {
      position: "absolute",
      bottom: 10,
      left: 10,
      zIndex: 2,
    },
  };
});

export default ContextCastCardItem;
