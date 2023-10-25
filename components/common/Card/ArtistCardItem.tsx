import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { CardItemBase } from "@/components/common";
import useThumbnail from "@/hooks/useThumbnail";
import imageError from "@/public/image/image_not_available.png";
import { ArtistListProps } from "@/interfaces/responseSchema/Artist";

interface ArtistCardItemProps {
  data: ArtistListProps;
}

const ArtistCardItem = ({ data }: ArtistCardItemProps) => {
  const { profile_path, original_name, name, id } = data;
  const thumbnail = useThumbnail(profile_path);
  const router = useRouter();

  return (
    <Container thumbnail={thumbnail} onClick={() => router.push(`/artist-info/${id}`)}>
      <CardItemBase className="card-base">
        <Box className={"card-image"} />

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
      width: 135,
      height: 135,
      borderRadius: "50%",

      ["& img"]: {
        objectFit: "cover",
      },

      [theme.breakpoints.down("sm")]: {
        width: 120,
        height: 120,
      },
    },

    ["& .card-title"]: {
      textAlign: "center",
      marginTop: theme.spacing(1),
      color: theme.palette.common.black,

      // truncate
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
  };
});

export default ArtistCardItem;
