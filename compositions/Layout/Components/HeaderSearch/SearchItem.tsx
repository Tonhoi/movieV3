import { styled, Stack, Typography, StackProps, Box } from "@mui/material";

import { Image } from "@/components";
import usePoster from "@/hooks/usePoster";

interface SearchItemProps extends Omit<StackProps, "onClick"> {
  data: any;
  onClick?: (id: string, media_type: string) => void;
}

const SearchItem = (props: SearchItemProps) => {
  const { data, onClick = () => {}, ...restProps } = props;
  const { name, title, original_title, id, poster_path, media_type } = data;

  const poster = usePoster(poster_path);

  return (
    <Container onClick={() => onClick(id, media_type)} {...restProps}>
      <Box className={"image-wrapper"}>
        <Image src={poster} style={{ objectFit: "cover" }} />
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
