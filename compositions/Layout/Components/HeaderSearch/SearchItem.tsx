import { styled, Stack, Typography, StackProps } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

interface SearchItemProps extends Omit<StackProps, "onClick"> {
  data: any;
  idx: number;
  onClick?: (title: string, id: string) => void;
}

const SearchItem = (props: SearchItemProps) => {
  const { data, idx, onClick = () => {}, ...restProps } = props;
  const { name, title, original_title, id } = data;

  return (
    <Container onClick={() => onClick(title, id)} {...restProps}>
      <Typography>{idx + 1}</Typography>
      <Typography variant={"h5"} className="title">
        {name ?? title ?? original_title}
      </Typography>
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    padding: "14px 16px",
    gap: 8,
    width: "100%",
    cursor: "pointer",

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
