import { useRouter } from "next/router";
import { Box, Stack, Typography, styled } from "@mui/material";

import { Image } from "@/components";
import usePoster from "@/hooks/usePoster";

interface SearchItemProps {
  name: string;
  first_air_date: string;
  overview: string;
  original_name: string;
  title: string;
  release_date: string;
  poster_path: string;
  media_type: string;
  id: string;
}

const SearchItem = (props: SearchItemProps) => {
  const {
    name,
    first_air_date,
    overview,
    original_name,
    title,
    release_date,
    poster_path,
    media_type,
    id,
  } = props;

  const router = useRouter();
  const poster = usePoster(poster_path);

  const handleClick = () => {
    router.push(`/detail/${media_type}/${id}`);
  };

  return (
    <Container onClick={handleClick}>
      <Box className={"image-wrapper"}>
        <Image src={poster} />
      </Box>

      <Stack className={"search-content-right"}>
        <Typography variant={"h3"} className={"name-movie"}>
          {title ?? name ?? original_name}
        </Typography>

        <Box className={"first_air_date_year"}>
          <Typography variant={"h5"} color={"#999999"}>
            Ngày phát sóng:
          </Typography>
          <Typography variant={"h5"}>{release_date ?? first_air_date}</Typography>
        </Box>

        <Typography variant={"h5"} className={"description-movie"}>
          {overview}
        </Typography>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    marginTop: theme.spacing(6),
    cursor: "pointer",

    ["&:hover .name-movie"]: {
      color: "#1CC749",
      transition: "color linear 0.1s",
    },

    ["&:not(:last-child)"]: {
      position: "relative",

      ["&:after"]: {
        content: '""',
        position: "absolute",
        top: `calc(100% + ${theme.spacing(3)})`,
        left: 0,
        width: "100%",
        height: 1,
        backgroundColor: "#ccc",
        cursor: "default",
      },
    },

    ["& .image-wrapper"]: {
      position: "relative",
      width: 156,
      height: 210,
      flexShrink: 0,

      [theme.breakpoints.down("sm")]: {
        width: 91,
        height: 121,
      },

      ["& img"]: {
        objectFit: "cover",
        borderRadius: 4,
      },
    },
    ["& .search-content-right"]: {
      marginLeft: theme.spacing(2),
      gap: theme.spacing(1),

      ["& .first_air_date_year"]: {
        display: "flex",
        alignItems: "center",
        gap: 4,
      },

      ["& .description-movie"]: {
        width: "80%",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",

        [theme.breakpoints.down("sm")]: {
          width: "100%",
        },
      },
    },
  };
});

export default SearchItem;
