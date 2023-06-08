import { SetStateAction, useState } from "react";
import { Box, Container, Stack, styled } from "@mui/material";

import ContentSliderHeader from "./Components/Slides/ContentSliderHeader";
import SlickSlider from "../Slick/SlickSlider";

const Slider = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [slider3, setSlider3] = useState(null);

  return (
    <StyledContainer>
      <StyledSlickWrapper>
        <SlickSlider
          variant="simple"
          asNavFor={slider2}
          refSlick={(slider: SetStateAction<null>) => setSlider1(slider)}
        >
          {Array(5)
            .fill(null)
            .map((el, idx: number) => (
              <StyledThumbnailWrapper key={idx}>
                <StyledThumbnail />
              </StyledThumbnailWrapper>
            ))}
        </SlickSlider>
      </StyledSlickWrapper>

      <Container>
        <ContentSliderHeader
          slider1={slider1}
          slider3={slider3}
          setSlider2={setSlider2}
          setSlider3={setSlider3}
        />
      </Container>

      <StyledBoxShadowLeft />

      <StyledBoxShadowTop />

      <StyledBoxShadowRight />
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)(({ theme }) => {
  return {
    position: "relative",
    height: "100%",
    justifyContent: "center",
    aspectRatio: "2 / 1",

    [theme.breakpoints.down("sm")]: {
      aspectRatio: "2 / 1.5",
    },

    ["&::after"]: {
      content: '""',
      position: "absolute",
      zIndex: 2,
      inset: 0,

      height: "100%",
      width: "100%",

      background: "linear-gradient(rgba(52,73,94,.255),#333 90%)",
    },
  };
});

const StyledSlickWrapper = styled(Box)(() => {
  return {
    position: "absolute",

    width: "100%",
    height: "100%",
  };
});

const StyledThumbnailWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    width: "100%",
    aspectRatio: "2 / 1",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      aspectRatio: "2 / 1.5",
    },
  };
});

const StyledThumbnail = styled(Box)(() => {
  return {
    position: "absolute",
    zIndex: "1",

    width: "100%",
    height: "100%",

    backgroundImage:
      "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
});

const StyledBoxShadowLeft = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 3,

    width: "30%",
    height: "100%",

    background:
      "linear-gradient(269deg, rgba(51, 22, 20, 0) 1%, rgba(51, 22, 20, 0.02) 10%, rgba(51, 22, 20, 0.05) 18%, rgba(51, 22, 20, 0.12) 25%, rgba(51, 22, 20, 0.2) 32%, rgba(51, 22, 20, 0.29) 38%, rgba(51, 22, 20, 0.39) 44%, rgba(51, 22, 20, 0.5) 50%, rgba(51, 22, 20, 0.61) 57%, rgba(51, 22, 20, 0.71) 63%, rgba(51, 22, 20, 0.8) 69%, rgba(51, 22, 20, 0.88) 76%, rgba(51, 22, 20, 0.95) 83%, rgba(51, 22, 20, 0.98) 91%, rgb(51, 22, 20) 100%)",
  };
});

const StyledBoxShadowTop = styled(Box)(() => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 3,

    width: "100%",
    height: "120px",

    background:
      "linear-gradient(179.5deg, rgba(17, 19, 25, 0.88) 0%, rgba(17, 19, 25, 0.89) 9%, rgba(17, 19, 25, 0.85) 17%, rgba(17, 19, 25, 0.79) 24%, rgba(17, 19, 25, 0.72) 31%, rgba(17, 19, 25, 0.64) 37%, rgba(17, 19, 25, 0.55) 44%, rgba(17, 19, 25, 0.45) 50%, rgba(17, 19, 25, 0.35) 56%, rgba(17, 19, 25, 0.26) 63%, rgba(17, 19, 25, 0.18) 69%, rgba(17, 19, 25, 0.11) 76%, rgba(17, 19, 25, 0.05) 83%, rgba(17, 19, 25, 0.01) 91%, rgba(17, 19, 25, 0) 100%)",
  };
});

const StyledBoxShadowRight = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 3,

    width: "15%",
    height: "100%",

    background:
      "linear-gradient(90deg, rgba(51, 22, 20, 0) 1%, rgba(51, 22, 20, 0.02) 10%, rgba(51, 22, 20, 0.05) 18%, rgba(51, 22, 20, 0.12) 25%, rgba(51, 22, 20, 0.2) 32%, rgba(51, 22, 20, 0.29) 38%, rgba(51, 22, 20, 0.39) 44%, rgba(51, 22, 20, 0.5) 50%, rgba(51, 22, 20, 0.61) 57%, rgba(51, 22, 20, 0.71) 63%, rgba(51, 22, 20, 0.8) 69%, rgba(51, 22, 20, 0.88) 76%, rgba(51, 22, 20, 0.95) 83%, rgba(51, 22, 20, 0.98) 91%, rgb(51, 22, 20) 100%)",
  };
});

export default Slider;
