import { Box, styled } from "@mui/material";
import { CustomArrowProps } from "react-slick";

const ArrowRight = (props: CustomArrowProps) => {
  const { className, onClick } = props;
  return <Container className={className} onClick={onClick}>ArrowRight</Container>;
};

const Container = styled(Box)(() => {
    return {
        
    }
})

export default ArrowRight;
