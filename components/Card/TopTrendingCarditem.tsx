import { Box, Typography, styled } from "@mui/material";

import cardImageDemo from "@/public/image/card_image_demo.webp";
import CardItemBase from "./CardItemBase";

const TopTrendingCarditem = () => {
  return (
    <Container>
      <CardItemBase>
        <StyledCardImage className="card-image" position={"relative"}>
          <Typography variant={"ryeTitle"}>TOP 1</Typography>
          <Typography variant={"h6"} className="card-image-badge">
            2023-05-31
          </Typography>
        </StyledCardImage>
      </CardItemBase>

      <StyledCardContent>
        <Typography variant={"h5"} className="card-title">
          My ID is Gangnam Beauty
        </Typography>
        <Typography variant={"h6"} className="card-subtitle">
          16 Episodes
        </Typography>
      </StyledCardContent>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    borderRadius: "4px",
    overflow: "hidden",
  };
});

const StyledCardImage = styled(Box)(({ theme }) => {
  return {
    backgroundImage: `url(${cardImageDemo.src})`,
    aspectRatio: "180 / 240",

    ["& > span"]: {
      position: "absolute",
      bottom: 10,
      left: 10,
      zIndex: 2,

      color: theme.palette.common.white,
    },

    ["& .card-image-badge"]: {
      position: "absolute",
      right: 0,
      top: 0,

      padding: "2px 4px",

      color: theme.palette.common.white,
      borderRadius: "2px",
      textAlign: "center",
      backgroundImage: "linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%)",
    },

    ["&:after"]: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,

      backgroundImage: "linear-gradient(rgba(20, 30, 51, 0) 1%, rgb(20, 30, 51) 100%)",
    },
  };
});

const StyledCardContent = styled(Box)(({ theme }) => {
  return {
    backgroundColor: "rgb(34, 20, 51)",
    color: theme.palette.common.white,
    padding: 10,

    ["& > .card"]: {
      ["&-title"]: {
        marginBottom: 6,
        maxWidth: "80%",
      },

      ["&-subtitle"]: {
        color: theme.palette.opacity.white_07,
      },
    },
  };
});

export default TopTrendingCarditem;
