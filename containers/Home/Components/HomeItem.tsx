import { Box, BoxProps, Typography, styled } from "@mui/material";
import { ReactNode } from "react";

interface HomeItemProps extends BoxProps {
  children: ReactNode;
  title: string;
}

const HomeItem = (props: HomeItemProps) => {
  const { children, title, ...restProps } = props;

  return (
    <Container title={title} {...restProps}>
      <Typography variant={"h3"} className={"home-title"}>
        {title}
      </Typography>
      {children}
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {};
});

export default HomeItem;
