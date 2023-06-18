import { Box, Stack, Typography, styled } from "@mui/material";

import { PlayIcon, SaveIcon, ArrowRightIcon, Link, CardItemBase } from "@/components";
import InfoMovie from "../InfoMovie";

const DetailCardItem = () => {
  return (
    <Container>
      <CardItemBase>
        <Box className="card-image" position={"relative"}>
          <Stack className={"card-image-icon"}>
            <PlayIcon className="icon play-icon" />
            <SaveIcon className="icon save-icon" />
          </Stack>
        </Box>
      </CardItemBase>

      <StyledCardContent className="card-content">
        <Typography variant={"subtitle1"} className="card-title">
          Our Secrets
        </Typography>

        <InfoMovie />

        <Link href={"/"}>
          <Stack className="card-btn">
            <Typography variant={"h6"}>more info</Typography>
            <ArrowRightIcon className="icon arrow-icon" />
          </Stack>
        </Link>
      </StyledCardContent>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    borderRadius: "4px",
    overflow: "hidden",

    cursor: "pointer",

    ["& .arrow-icon"]: {
      width: 14,
      height: 14,
    },

    ["& .card-image"]: {
      backgroundImage:
        "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
      aspectRatio: "284 / 159",

      ["& .card-image-icon"]: {
        position: "absolute",
        bottom: 8,
        right: 8,
        zIndex: 2,

        flexDirection: "row",
        alignItems: "center",
        gap: 8,

        ["& .icon"]: {
          transform: "scale(1)",
          transition: "transform linear 0.2s",

          ["&:hover"]: {
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        },

        ["& :where(.play-icon, .save-icon)"]: {
          width: 32,
          height: 32,
        },
      },
    },
  };
});

const StyledCardContent = styled(Stack)(({ theme }) => {
  return {
    background: theme.palette.secondary.main,
    padding: 8,
    gap: 8,

    color: theme.palette.common.white,

    ["& hr"]: {
      width: 2,
      height: 12,

      background: theme.palette.opacity.white_02,
    },

    ["& .card-title"]: {
      ["&:hover"]: {
        color: theme.palette.text_hover.main,

        cursor: "pointer",
        transition: "color linear 0.2s",
      },
    },

    ["& .card-btn"]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      textAlign: "right",
      marginTop: theme.spacing(1),
      marginBottom: 4,

      color: theme.palette.text_hover.main,
    },
  };
});

export default DetailCardItem;
