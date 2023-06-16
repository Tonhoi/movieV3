import { forwardRef } from "react";
import { Box, Divider, Paper, PaperProps, Typography, styled } from "@mui/material";

interface CustomInputProps extends PaperProps {}

const CustomInput = forwardRef((props: CustomInputProps, ref) => {
  return (
    <Box ref={ref}>
      <Paper elevation={1} {...props} />
      <StyledViewMoreBlock>
        <StyledDivider />
        <Typography variant={"h5"} padding={"12px 0"} display={"block"}>
          VIEW MORE
        </Typography>
      </StyledViewMoreBlock>
    </Box>
  );
});

const StyledViewMoreBlock = styled(Box)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 0,
    left: 0,

    width: "calc(100% + 67px)",
    textAlign: "center",

    backgroundColor: theme.palette.secondary.main,
    color: "#bcbdbe",
  };
});

const StyledDivider = styled(Divider)(() => {
  return {
    backgroundColor: "#bcbdbe",
  };
});

export default CustomInput;
