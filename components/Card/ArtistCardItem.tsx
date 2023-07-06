import { Box, Typography, styled } from "@mui/material";
import { useMeasure } from "react-use";

import { CardItemBase } from "@/components";
import useThumbnail from "@/hooks/useThumbnail";
import imageError from "@/public/image/image_not_available.png";

interface ArtistCardItemProps {
  data: any;
}

const ArtistCardItem = ({ data }: ArtistCardItemProps) => {
  const { profile_path, original_name, name } = data;
  const thumbnail = useThumbnail(profile_path);
  const [ref, { width }] = useMeasure();

  return (
    <Container ref={ref} thumbnail={thumbnail}>
      <CardItemBase className="card-base">
        <Box className={"card-image"} width={width} height={width}></Box>

        <Typography variant={"body1"} className={"card-title"}>
          {name ?? original_name}
        </Typography>
      </CardItemBase>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "thumbnail",
})<{ thumbnail: string }>(({ thumbnail, theme }) => {
  return {
    ["&:hover"]: {
      ["& .card-title"]: {
        color: "#0bbe06",
        transition: "color linear 0.2s",
      },
    },

    ["& .card-base"]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    ["& .card-image"]: {
      backgroundImage: `url(${thumbnail}), url(${imageError.src})`,
      maxWidth: 135,
      maxHeight: 135,
      borderRadius: "50%",

      ["& img"]: {
        objectFit: "cover",
      },
    },

    ["& .card-title"]: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
  };
});

export default ArtistCardItem;
