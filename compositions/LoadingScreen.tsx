import { Box, styled } from "@mui/material";
import { memo } from "react";

interface LoadingScreenProps {
  fadeOut: boolean;
}

const LoadingScreen = (props: LoadingScreenProps) => {
  const { fadeOut } = props;

  return (
    <Container fadeOut={fadeOut} className="asdasd">
      <ContentWrapper>
        <Box className="fancy-spinner">
          <Box className="ring" />
          <Box className="ring" />
          <Box className="dot" />
        </Box>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled(Box, {
  shouldForwardProp: (propName) => propName !== "fadeOut",
})<{ fadeOut: boolean }>(({ fadeOut }) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    maxHeight: "-webkit-fill-available",
    zIndex: 1001,
    backgroundColor: "#F3FBFF",
    userSelect: "none",
    pointerEvents: fadeOut ? "none" : "unset",
    transition: "500ms",
    opacity: fadeOut ? 0 : 1,
  };
});

const ContentWrapper = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    rowGap: 24,

    ["& .fancy-spinner"]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "9rem",
      height: "9rem",

      ["& div"]: {
        position: "absolute",
        width: "10rem",
        height: "10rem",
        borderRadius: "50%",

        ["&.ring"]: {
          borderWidth: "1rem",
          borderStyle: "solid",
          borderColor: "transparent",
          animation: "2s fancy infinite alternate",

          ["&:nth-of-type(1)"]: {
            borderLeftColor: "#979fd0",
            borderRightColor: "#979fd0",
          },

          ["&:nth-of-type(2)"]: {
            borderTopColor: "#979fd0",
            borderBottomColor: "#979fd0",
            animationDelay: "0.8s",
          },
        },

        ["&.dot"]: {
          width: "3rem",
          height: "3rem",
          background: "#979fd0",
        },

        "@keyframes fancy": {
          to: {
            transform: "rotate(360deg) scale(0.5)",
          },
        },
      },
    },
  };
});

export default memo(LoadingScreen);
