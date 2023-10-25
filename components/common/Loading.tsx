import { Box, BoxProps, CircularProgress, styled } from "@mui/material";

interface LoadingProps extends BoxProps {}

const Loading = (props: LoadingProps) => {
  return (
    <Container {...props}>
      <CircularProgress className="loading" />

      <Box>
        Loading
        <Box className="loading-text" />
      </Box>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 10,

    ["& .loading"]: {
      color: "#1976d2",
    },

    ["& .loading-text"]: {
      animation: "extend 3s steps(3, end) infinite",
      display: "inline-block",
      overflow: "hidden",
      verticalAlign: "bottom",
      ["&:before"]: {
        content: `"..."`,
      },
    },

    ["@keyframes extend"]: {
      ["0%"]: {
        width: ".25em",
      },

      ["100%"]: {
        width: "1em",
      },
    },
  };
});

export default Loading;
