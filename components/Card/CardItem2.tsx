import { Box, BoxProps, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { CardItemBase, PlayIcon } from "@/components";
import usePoster from "@/hooks/usePoster";

interface CardItem2Props extends BoxProps {
  poster_path: string;
  title?: string;
  popularity: number;
  id: string;
  original_name?: string;
  name?: string;
}

const CardItem2 = (props: CardItem2Props) => {
  const { poster_path, title, popularity, id, original_name, name, ...restProps } = props;
  const router = useRouter();
  const poster = usePoster(poster_path);

  return (
    <CardItemBase
      onClick={() => router.push(`/detail/${title ? "movie" : "tv"}/${id}`)}
      {...restProps}
    >
      <Container poster_path={poster}>
        <PlayIcon className="play-icon" />

        <Box className="card-content">
          <Typography variant={"subtitle1"} className="title">
            {title ?? original_name ?? name}
          </Typography>

          <Typography variant={"subtitle2"} className="sub-title">
            {popularity} Lượt xem
          </Typography>
        </Box>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster_path",
})<{ poster_path: string }>(({ poster_path }) => {
  return {
    aspectRatio: "302 / 400",
    borderRadius: 12,

    backgroundImage: `url(${poster_path})`,

    [":hover"]: {
      filter: "contrast(0.9)",

      ["& .play-icon"]: {
        opacity: 1,
      },
    },

    ["& .play-icon"]: {
      position: "relative",
      left: 12,
      top: 6,

      width: 50,
      height: 70,

      opacity: 0,
      transition: "all linear 0.1s",
    },

    ["& .card-content"]: {
      position: "absolute",
      left: 0,
      bottom: 0,
      zIndex: 2,

      width: "100%",
      padding: "30px 8px 15px",
      borderRadius: 12,
      color: "#ececec",

      backgroundImage:
        "linear-gradient(transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))",

      ["& .title"]: {
        marginBottom: 4,

        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },
    },
  };
});

export default CardItem2;
