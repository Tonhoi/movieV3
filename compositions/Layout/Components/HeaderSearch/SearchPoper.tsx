import { styled, Stack, Typography, StackProps } from "@mui/material";
import { Fragment } from "react";

interface SearchPoperProps extends StackProps {}

const SearchPoper = (props: SearchPoperProps) => {
  const { ...restProps } = props;

  return (
    <Fragment>
      <Container {...restProps}>
        <Typography>1</Typography>
        <Typography variant={"h5"} className="title">
          phim hay
        </Typography>
      </Container>
    </Fragment>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    padding: "14px 16px",
    gap: 8,
    cursor: "pointer",

    "&:hover": {
      // backgroundColor: "#ffffff14",
      transition: "all linear 0.2s",

      "& .title": {
        color: theme.palette.text_hover.main,
        transition: "all linear 0.2s",
      },
    },
  };
});

export default SearchPoper;
