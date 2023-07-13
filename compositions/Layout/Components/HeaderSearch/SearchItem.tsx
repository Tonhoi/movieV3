import { styled, Stack, Typography, StackProps, Box } from "@mui/material";
import { useState } from "react";

import { Image } from "@/components";
import usePoster from "@/hooks/usePoster";
import { MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import image_not_available from "@/public/image/image_not_available.png";

export interface media_type {
  media_type: string;
}

interface SearchItemProps extends Omit<StackProps, "onClick"> {
  data: TVSCHEMA & MOVIESCHEMA & media_type;
  onClick?: (id: string, media_type: string) => void;
}

const SearchItem = (props: SearchItemProps) => {
  const { data, onClick = () => {}, ...restProps } = props;
  const { name, title, original_title, id, poster_path, media_type } = data;
  const poster = usePoster(poster_path);
  const [src, setSrc] = useState<string>(poster);

  return (
    <Container onClick={() => onClick(id, media_type)} {...restProps}>
      <Box className={"image-wrapper"}>
        <Image
          src={src}
          style={{ objectFit: "cover" }}
          onError={() => setSrc(image_not_available.src)}
        />
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
    // alignItems: "center",
    padding: "14px 16px",
    gap: 8,
    width: "100%",
    cursor: "pointer",

    ["& .image-wrapper"]: {
      position: "relative",
      width: "100%",
      maxWidth: 80,
      height: 80,
      borderRadius: "4px",
      overflow: "hidden",
    },

    ["&:nth-of-type(20)"]: {
      margin: "0px 0px 40px",
    },

    ["&:hover"]: {
      transition: "all linear 0.2s",

      ["& .title"]: {
        color: theme.palette.text_hover.main,
        transition: "all linear 0.2s",
      },
    },
  };
});

export default SearchItem;
