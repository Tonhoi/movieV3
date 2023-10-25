import { styled, Stack, Typography, StackProps, Box } from "@mui/material";

import { Image } from "@/components/common";
import usePoster from "@/hooks/usePoster";
import { MovieProps, TvProps } from "@/interfaces/responseSchema/utils";
import { useRouter } from "next/router";

export interface media_type {
  media_type: string;
}

interface SearchItemProps extends StackProps {
  data: TvProps & MovieProps & media_type;
  handleCloseSearchResult: () => void;
}

const SearchItem = (props: SearchItemProps) => {
  const { data, handleCloseSearchResult, ...restProps } = props;
  const { name, title, original_title, id, poster_path, media_type } = data;
  const router = useRouter();
  const poster = usePoster(poster_path);

  const handleClick = () => {
    router.push(`/detail/${media_type}/${id}`);
    handleCloseSearchResult();
  };

  return (
    <Container className="search-item" onClick={handleClick} {...restProps}>
      <Box className={"poster"}>
        <Image src={poster} />
      </Box>

      <Typography variant={"h5"} className="title">
        {name ?? title ?? original_title}
      </Typography>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    padding: "14px 16px",
    gap: 10,
    cursor: "pointer",

    ["& .title"]: {
      color: theme.palette.text_color.main,
      ["&:hover"]: {
        color: "#1cc749",
        transition: "all linear 0.2s",
      },
    },

    ["& .poster"]: {
      position: "relative",
      width: 80,
      height: 80,
      flexShrink: 0,

      ["& img"]: {
        objectFit: "cover",
        borderRadius: 4,
      },
    },

    ["&:nth-of-type(20)"]: {
      margin: "0px 0px 20px",
    },
  };
});

export default SearchItem;
