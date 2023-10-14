import { memo } from "react";
import { Box, BoxProps, Typography, styled } from "@mui/material";

interface HeadingProps extends BoxProps {
  commentLength: number;
}

const Heading = ({ commentLength, ...restProps }: HeadingProps) => {
  return (
    <Container className={"comment-heading"} {...restProps}>
      <Typography variant="h4" className={"comment-total"}>
        {commentLength} bình luận
      </Typography>
      <Typography variant="body1" className="comment-help">
        (Nếu thấy bình luận spam, các bạn bấm report giúp admin nhé)
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    marginBottom: 35,
    ["& .comment-total"]: {
      fontSize: 18,
      lineHeight: 1.2,
    },

    ["& .comment-help"]: {
      fontSize: 13,
      lineHeight: 1.4,
      margin: "10px 0",
      fontStyle: "italic",
    },
  };
});

export default memo(Heading);
