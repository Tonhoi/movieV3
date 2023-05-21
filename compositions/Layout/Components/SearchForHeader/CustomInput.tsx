import { Box, Divider, Paper, Typography, styled } from "@mui/material";
import { ReactNode, forwardRef } from "react";

import ScrollBars from "@/components/ScrollBars";
import { ScrollbarProps } from "react-custom-scrollbars";

const CustomInput = forwardRef((props: any, ref) => {
  return (
    <Box ref={ref}>
      <ScrollBars>
        <Paper elevation={1} {...props} />
      </ScrollBars>
      <StyledViewMoreBlock>
        <StyledDivider />
        <Typography variant={"h5"} padding={"12px 0"} display={"block"}>
          VIEW MORE
        </Typography>
      </StyledViewMoreBlock>
    </Box>
  );
});

const StyledViewMoreBlock = styled(Box)(() => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,

    width: "calc(100% + 67px)",
    textAlign: "center",

    backgroundColor: "#1a1c22",
    color: "#bcbdbe",
  };
});

const StyledDivider = styled(Divider)(() => {
  return {
    backgroundColor: "#bcbdbe",
  };
});

export default CustomInput;
