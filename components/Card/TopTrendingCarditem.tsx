import { memo } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import CardItemBase from "./CardItemBase";
import useThumbnail from "@/hooks/useThumbnail";
import { MOVIESCHEMA } from "@/interfaces/responseSchema/utils";

interface addData {
  first_air_date?: string;
  original_name?: string;
}

interface TopTrendingCarditemprops {
  data: MOVIESCHEMA & addData;
  idx: number;
}

const TopTrendingCarditem = ({ data, idx }: TopTrendingCarditemprops) => {
  const {
    id,
    title,
    release_date,
    first_air_date,
    backdrop_path,
    original_title,
    original_name,
  } = data;

  const router = useRouter();
  const thumbnail = useThumbnail(backdrop_path);

  return (
    <Container
      className={"topTrending-container"}
      onClick={() => router.push(`/detail/${!!title ? "movie" : "tv"}/${id}`)}
    >
      <CardItemBase height={"100%"}>
        <StyledCardImage
          thumbnail={thumbnail}
          className="card-image"
          position={"relative"}
        >
          <Typography variant={"h6"} className="card-image-badge">
            {release_date ?? first_air_date}
          </Typography>

          <Box className={"card-content"}>
            <Typography variant={"ryeTitle"} className={"rank-movie"}>
              TOP {idx + 1}
            </Typography>
            <Typography variant={"h5"} className="card-title">
              {title ?? original_title ?? original_name}
            </Typography>
          </Box>
        </StyledCardImage>
      </CardItemBase>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    borderRadius: "4px",

    [theme.breakpoints.down("md")]: {
      width: "50%",
      flexShrink: 0,
      scrollSnapAlign: "center",
    },
  };
});

const StyledCardImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "thumbnail",
})<{ thumbnail: string }>(({ theme, thumbnail }) => {
  return {
    backgroundImage: `url(${thumbnail})`,
    aspectRatio: "430 / 258",
    height: "100%",
    width: "100%",

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
    ["& .card-content"]: {
      position: "absolute",
      bottom: 10,
      left: 10,
      zIndex: 2,

      ["& .card-title"]: {
        bottom: 0,
        zIndex: 2,

        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
  };
});

export default memo(TopTrendingCarditem);
