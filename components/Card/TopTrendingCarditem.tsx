import { Box, Stack, Typography, styled } from "@mui/material";

import cardImageDemo from "@/public/image/card_image_demo.webp";
import CardItemBase from "./CardItemBase";
import { TrendingMovie } from "@/interfaces/responseSchema/trendingMovie";
import Link from "../Link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { UpComingMovie } from "@/interfaces/responseSchema/upComingMovie";

interface TopTrendingCarditemprops {
  data: TrendingMovie;
  idx: number;
}

const TopTrendingCarditem = ({ data, idx }: TopTrendingCarditemprops) => {
  const {
    id,
    title,
    poster_path,
    release_date,
    first_air_date,
    original_title,
    original_name,
  } = data;

  const router = useRouter();

  return (
    <Container onClick={() => router.push(`/detail/${!!title ? "movie" : "tv"}/${id}`)}>
      <CardItemBase>
        <StyledCardImage
          poster_path={poster_path}
          className="card-image"
          position={"relative"}
        >
          <Typography variant={"ryeTitle"} className={"rank-movie"}>
            TOP {idx}
          </Typography>
          <Typography variant={"h6"} className="card-image-badge">
            {release_date ?? first_air_date}
          </Typography>
        </StyledCardImage>
      </CardItemBase>

      <StyledCardContent>
        <Typography variant={"h5"} className="card-title">
          {title ?? original_title ?? original_name}
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

const StyledCardImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster_path",
})<{ poster_path: string }>(({ theme, poster_path }) => {
  return {
    backgroundImage: `url(https://image.tmdb.org/t/p/w300${poster_path})`,
    aspectRatio: "180 / 240",

    ["& .rank-movie"]: {
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

const StyledCardContent = styled(Stack)(({ theme }) => {
  const colors = [
    "rgb(51, 47, 20)",
    "rgb(20, 25, 51)",
    "rgb(20, 35, 51)",
    "rgb(20, 31, 51)",
    "rgb(51, 26, 20)",
    "rgb(20, 45, 51)",
    "rgb(51, 35, 20)",
    "rgb(51, 20, 37)",
    "rgb(51, 36, 20)",
    "rgb(51, 27, 20)",
    "rgb(51, 45, 20)",
    "rgb(48, 51, 20)",
    "rgb(51, 36, 20)",
    "rgb(51, 20, 31)",
    "rgb(20, 51, 51)",
    "rgb(51, 30, 20)",
    "rgb(20, 32, 51)",
    "rgb(51, 22, 20)",
    "rgb(51, 20, 28)",
    "rgb(20, 38, 51)",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return {
    backgroundColor: colors[randomIndex],
    color: theme.palette.common.white,
    padding: 10,

    minHeight: 74,
    justifyContent: "space-between",

    ["& .card"]: {
      ["&-title"]: {
        marginBottom: 6,
        maxWidth: "80%",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },

      ["&-subtitle"]: {
        color: theme.palette.opacity.white_07,
      },
    },
  };
});

export default TopTrendingCarditem;
