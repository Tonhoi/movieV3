import { Box, Typography, styled } from "@mui/material";

import cardImageDemo from "@/public/image/card_image_demo.webp";

const TopTrendingCarditem = () => {
  return (
    <Container>
      <StyledCardImage position={"relative"}>
        <Typography variant={"ryeTitle"}>TOP 1</Typography>
        <Typography variant={"h6"}>2023-05-31</Typography>
      </StyledCardImage>

      <StyledCardContent>
        <Typography variant={"h5"}>My ID is Gangnam Beauty</Typography>
        <Typography variant={"h6"}>16 Episodes</Typography>
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
    position: "relative",

    aspectRatio: "180 / 240",

    backgroundImage: `url(${cardImageDemo.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",

    ["& > span"]: {
      position: "absolute",
      bottom: 10,
      left: 10,
      zIndex: 2,

      color: theme.palette.common.white,
    },

    ["& > h6"]: {
      position: "absolute",
      right: 0,
      top: 0,

      padding: "2px 4px",

      color: "rgb(255, 255, 255)",
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

    ["& > h5"]: {
      marginBottom: 6,
      maxWidth: "80%",
    },

    ["& > h6"]: {
      color: "rgba(255, 255, 255, 0.7)",
    },
  };
});

export default TopTrendingCarditem;
