import { Box, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { CardItemBase, StarIcon } from "@/components/common";
import useThumbnail from "@/hooks/useThumbnail";

interface UpcomingCardItemProps {
  backdrop_path: string;
  title: string;
  original_title: string;
  vote_average: number;
  popularity: number;
  id: string;
}

const UpcomingCardItem = (props: UpcomingCardItemProps) => {
  const { backdrop_path, title, original_title, vote_average, popularity, id } = props;

  const router = useRouter();
  const thumbnail = useThumbnail(backdrop_path);

  const handleClick = () => {
    router.push(`/detail/${title ? "movie" : "tv"}/${id}`);
  };

  return (
    <CardItemBase zoom="zoom-in">
      <Container thumbnail={thumbnail} onClick={handleClick}>
        <Box className={"card-image"}>
          <Typography className={"card-badge"} variant={"h5"}>
            SẮP CHIẾU
          </Typography>

          <Box className={"card-content"}>
            <Typography className={"card-title"} variant={"subtitle1"}>
              {title ?? original_title}
            </Typography>

            <Stack className={"card-subtitle-wrapper"}>
              <Stack className={"card-vote-count"}>
                <StarIcon className="star-icon" />
                <Typography variant={"subtitle2"}>{vote_average}</Typography>
              </Stack>

              <Typography className={"card-viewer-count"}>
                {popularity} lượt xem
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </CardItemBase>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "thumbnail",
})<{ thumbnail: string }>(({ thumbnail }) => {
  return {
    ["& .card-image"]: {
      position: "relative",
      backgroundImage: `url(${thumbnail})`,
      aspectRatio: "320 /180",
      // borderRadius: 8,

      ["&:after"]: {
        height: 60,
        backgroundImage: "linear-gradient(to bottom, transparent,  #111827)",
      },

      ["& .card-badge"]: {
        position: "absolute",
        top: 12,
        left: 12,

        width: "fit-content",
        padding: "4px 12px",
        backgroundColor: "rgb(220 38 38/.5)",
        borderRadius: 24,
        color: "#ececec",
      },

      ["& .card-content"]: {
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 2,
        color: "#ececec",

        width: "100%",
        padding: "0 12px 12px",

        ["& .card-subtitle-wrapper"]: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },

        ["& .card-vote-count"]: {
          flexDirection: "row",
          alignItems: "flex-end",
          gap: 4,
        },

        ["& .star-icon"]: {
          width: 14,
          height: 14,
          color: "#1CC749",
        },

        ["& .card-title"]: {
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          marginBottom: 12,
        },
      },
    },
  };
});

export default UpcomingCardItem;
