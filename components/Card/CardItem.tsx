import { Box, Typography, styled } from "@mui/material";

import cardDemo from "@/public/image/card_image_demo.webp";
import CardItemBase from "./CardItemBase";
import PlayIcon from "../Icons/PlayIcon";
import SaveIcon from "../Icons/SaveIcon";

interface CardItemProps {
  animation?: boolean;
}

const CardItem = (props: CardItemProps) => {
  const { animation = false } = props;
  return (
    <CardItemBase>
      <Container className={animation ? "active" : ""}>
        <StyledCardImage className="card-image">
          <PlayIcon className={`icon icon-play ${animation ? "active" : ""}`} />
          <SaveIcon className={`icon icon-save ${animation ? "active" : ""}`} />
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
    transform: "scale(1)",
    transition: "transform linear 0.2s",

    ["& .card-title"]: {
      marginTop: theme.spacing(1),
    },

    ["&:hover"]: {
      ["& .card-title"]: {
        color: theme.palette.text_hover.main,
      },

      ["& .icon.active"]: {
        display: "block",
      },

      ["&.active"]: {
        transform: "scale(1.05)",
      },
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
  };
});

export default CardItem;
