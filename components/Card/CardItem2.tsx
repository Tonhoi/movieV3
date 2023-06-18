import { Box, Typography, styled } from "@mui/material";
import { PlayIcon, CardItemBase } from "@/components";

import cardImageDemo from "@/public/image/demoImageCard.jpg";

const CardItem2 = () => {
  return (
    <CardItemBase>
      <Container>
        <StyledCardImage className="card-image">
          <PlayIcon className="play-icon" />
        </StyledCardImage>

        <Typography variant={"h5"} className="card-title">
          Hi Producer! Episode 1
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

const StyledCardImage = styled(Box)(() => {
  return {
    backgroundImage: `url(${cardImageDemo.src})`,
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

export default CardItem2;
