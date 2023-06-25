import { Box, CircularProgress, Typography, styled } from "@mui/material";
import logo from "@/public/image/logo.png";
import { Image } from "@/components";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  fadeOut: boolean;
}

const LoadingScreen = (props: LoadingScreenProps) => {
  const { fadeOut } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container fadeOut={fadeOut}>
      <ContentWrapper>
        <StyledImageWrapper>
          <Box className="image-wrapper">
            <Image priority loading="eager" src={logo} alt="" />
          </Box>
        </StyledImageWrapper>

        <CircularProgress variant="determinate" value={progress} color="primary" />
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
    pointerEvents: "none",
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
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    ["& .image-wrapper"]: {
      width: 250,
      height: 120,
      ["& img"]: {
        objectFit: "contain",
      },
    },
  };
});

export default LoadingScreen;
