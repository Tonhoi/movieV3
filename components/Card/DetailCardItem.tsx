import React from "react";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";

import PlayIcon from "../Icons/PlayIcon";
import SaveIcon from "../Icons/SaveIcon";
import StarIcon from "../Icons/StarIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import Link from "../Link";

const DetailCardItem = () => {
  return (
    <Container>
      <StyledCardImage position={"relative"}>
        <StyledIconWrapper>
          <PlayIcon />
          <SaveIcon />
        </StyledIconWrapper>
      </StyledCardImage>

      <StyledCardContent>
        <Typography variant={"subtitle1"}>Our Secrets</Typography>

        <StyledContentWrapper>
          <StarIcon style={{ width: 12, height: 12 }} />
          <Typography variant="body2" color={"rgb(28, 199, 73)"}>
            9.7
          </Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">2017</Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">C13</Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">24 Episodes</Typography>
        </StyledContentWrapper>

        <StyledContentWrapper>
          <StyledGenreMovie variant="h6">Chinese Mainland</StyledGenreMovie>
        </StyledContentWrapper>

        <StyledDesctiption variant="h6">
          "Our Secret" (2021) - A story of a talented campus beau, Zhou Si Yue (Chen Zhe
          Yuan), and a determined Cinderella, Ding Xian (Xu Meng Jie), who accompany each
          other through the lows and lost of their youth and eventually become better
          selves. Zhou Si Yue is a handsome young man. He suffers from family changes but
          still firmly pursues what is in his heart. Ding Xian is a diligent and positive
          Little Sun. She explores what she loves. In the day-to-day campus life, the two
          accompanied each other through a low and lost period, and finally grew and
          changed together. This drama is adapted from the novel of the same name by Er
          Dong Tu Zi. The male actor, Chen Zhe Yuan, starred in "Renascence" and "The
          Legend Of Zu 2" which have aired on the iQIYI website.
        </StyledDesctiption>

        <Link href={"/"}>
          <Stack className="btn-seeMore">
            <Typography variant={"h6"}>more info</Typography>
            <ArrowRightIcon style={{ width: 14, height: 14 }} />
          </Stack>
        </Link>
      </StyledCardContent>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    // maxWidth: 284,

    borderRadius: "4px",
    overflow: "hidden",

    cursor: "pointer",
  };
});

const StyledCardImage = styled(Box)(() => {
  return {
    backgroundImage:
      "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    aspectRatio: "284 / 159",
  };
});

const StyledIconWrapper = styled(Stack)(() => {
  return {
    position: "absolute",
    bottom: 8,
    right: 8,

    flexDirection: "row",
    alignItems: "center",
    gap: 8,

    ["& svg"]: {
      width: 32,
      height: 32,
      transform: "scale(1)",
      transition: "transform linear 0.2s",

      ["&:hover"]: {
        cursor: "pointer",
        transform: "scale(1.1)",
      },
    },
  };
});

const StyledCardContent = styled(Stack)(({ theme }) => {
  return {
    background: "rgb(26, 28, 34)",
    padding: "8px 8px",
    gap: "6px",

    color: theme.palette.common.white,

    ["& hr"]: {
      width: 2,
      height: 12,

      background: "rgba(255, 255, 255, 0.2)",
    },

    ["& > h6:first-child"]: {
      ["&:hover"]: {
        color: "rgb(28, 199, 73)",

        cursor: "pointer",
        transition: "color linear 0.2s",
      },
    },

    ["& .btn-seeMore"]: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      textAlign: "right",
      marginTop: theme.spacing(1),
      marginBottom: 4,

      color: "rgb(28, 199, 73)",
    },
  };
});

const StyledContentWrapper = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",

    "& svg": {
      width: 50,
      height: 50,

      cursor: "pointer",

      ":hover": { opacity: 0.8, transition: "opacity linear 0.3s" },
    },
  };
});

const StyledDesctiption = styled(Typography)(({ theme }) => {
  return {
    display: "-webkit-box",
    maxWidth: "100%",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };
});

const StyledGenreMovie = styled(Typography)(() => {
  return {
    padding: "2px 4px",

    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "2px",
  };
});

export default DetailCardItem;
