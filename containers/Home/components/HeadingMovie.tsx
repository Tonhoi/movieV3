import { Typography, TypographyProps, styled } from "@mui/material";

interface HeadingMovieProps extends TypographyProps {
  title: string;
}

const HeadingMovie = ({ title, ...restProps }: HeadingMovieProps) => {
  return (
    <Container variant={"h3"} className={"title"} {...restProps}>
      {title}
    </Container>
  );
};

const Container = styled(Typography)(() => {
  return {
    position: "relative",
    margin: "42px 0",

    ["&:after"]: {
      content: '""',
      position: "absolute",
      top: "calc(100% + 12px)",
      left: 0,

      width: "100%",
      height: 1,
      backgroundColor: "#595959",
    },
  };
});

export default HeadingMovie;