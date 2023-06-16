import { Box, Typography, styled } from "@mui/material";

import cardDemo from "@/public/image/card_image_demo.webp";
import CardItemBase from "./CardItemBase";

const CardItem = () => {
  return (
    <CardItemBase>
      <Container>
        <StyledCardImage className="card-image">
          <Typography variant="h6" className="viewer-count">
            51.818 lượt xem
          </Typography>
        </StyledCardImage>

        <Typography variant={"subtitle1"} className="card-title">
          Our Secrets
        </Typography>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    ["& .card-title"]: {
      marginTop: theme.spacing(1),
    },

    ["&:hover .card-title"]: {
      color: theme.palette.text_hover.main,
    },
  };
});

const StyledCardImage = styled(Box)(({ theme }) => {
  return {
    backgroundImage: `url(${cardDemo.src})`,

    aspectRatio: "172 / 230",

    borderRadius: "4px",

    ["& .viewer-count"]: {
      position: "absolute",
      bottom: 10,
      left: 8,
      zIndex: 2,

      color: theme.palette.common.white,
    },
  };
});

export default CardItem;
