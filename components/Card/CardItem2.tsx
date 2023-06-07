import { Box, Typography, styled } from "@mui/material";
import PlayIcon from "../Icons/PlayIcon";

import cardImageDemo from "@/public/image/demoImageCard.jpg";

const CardItem2 = () => {
  return (
    <Container>
      <StyledCardImage>
        <PlayIcon />
      </StyledCardImage>

      <Typography variant={"h5"}>Hi Producer! Episode 1</Typography>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    width: "100%",
    transform: "scale(1)",
    cursor: "pointer",
    transition: "transform linear 0.2s",

    ["&:hover"]: {
      transform: "scale(1.05)",

      ["& svg"]: {
        display: "block",
      },

      ["& > h5"]: {
        color: "rgb(28, 199, 73)",
      },
    },
  };
});

const StyledCardImage = styled(Box)(() => {
  return {
    position: "relative",

    backgroundImage: `url(${cardImageDemo.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    aspectRatio: "300 / 170",

    borderRadius: "2px",
    overflow: "hidden",

    ["& svg"]: {
      position: "absolute",
      bottom: 10,
      right: 10,
      zIndex: 2,

      display: "none",
      width: 34,
      height: 34,
    },

    ["&:after"]: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundImage:
        " linear-gradient(0deg, rgba(10, 12, 15, 0.8) 0%, rgba(10, 12, 15, 0.74) 4%, rgba(10, 12, 15, 0.59) 17%, rgba(10, 12, 15, 0.4) 34%, rgba(10, 12, 15, 0.21) 55%, rgba(10, 12, 15, 0.06) 78%, rgba(10, 12, 15, 0) 100%)",
      height: 60,
    },
  };
});

export default CardItem2;
