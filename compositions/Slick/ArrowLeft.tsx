import { Box, styled } from "@mui/material";
import { CustomArrowProps } from "react-slick";

const ArrowLeft = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return (
    <Container className={className} onClick={onClick}>
      ArrowLeft
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {};
});

export default ArrowLeft;
