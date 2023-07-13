import { Box, Stack, Typography, styled } from "@mui/material";

import usePoster from "@/hooks/usePoster";
import { REVIEWSCHEMA } from "@/interfaces/responseSchema/reviews";

import image from "@/public/image/avatar.png";

interface ReviewsProps {
  data: REVIEWSCHEMA;
}

const Reviews = ({ data }: ReviewsProps) => {
  const { author, content, created_at, author_details } = data;

  const poster = usePoster(author_details.avatar_path);
  return (
    <Container poster={poster}>
      <Stack className={"card-wrapper"}>
        <Box className={"image-wrapper"} />

        <Stack gap={1} flex={1}>
          <Stack direction={"row"} gap={"4px"}>
            <Typography variant={"h5"} className={"description"}>
              {content}
            </Typography>
            <Typography variant={"h5"} className={"vote-average"}>
              {author_details.rating}
            </Typography>
          </Stack>

          <Typography variant="h5" color={"#A67C7C"}>
            Read MORE
          </Typography>

          <Typography variant="h5" color={"#A67C7C"} className={"time"}>
            {created_at} by {author}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "poster",
})<{ poster: string }>(({ poster, theme }) => {
  return {
    ["& .card-wrapper"]: {
      border: "1px solid rgb(38 36 36)",
      padding: 15,
      flexDirection: "row",
      gap: 15,

      ["& .image-wrapper"]: {
        backgroundImage: `url(${poster}), url(${image.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        maxWidth: 50,
        minWidth: 50,
        height: 50,
        borderRadius: "4px",
      },

      ["& .description"]: {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        flex: 1,
      },

      ["& .vote-average"]: {
        width: "100%",
        maxWidth: 30,
        minWidth: 30,
        height: 30,
        borderRadius: "50%",
        border: "2px solid #1CC749",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  };
});

export default Reviews;
