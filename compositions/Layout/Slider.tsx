import { SetStateAction, useState } from "react";
import { Box, Container, Stack, styled } from "@mui/material";

import SlideContentHeader from "./Components/Slider/SlideContentHeader";
import SlickSlider from "../Slick/SlickSlider";
import SlideShadow from "./Components/Slider/SlideShadow";

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
              <StyledThumbnailWrapper key={idx} className="thumbnail-wrapper">
                <Box className="thumbnail" />
              </StyledThumbnailWrapper>
            ))}
        </SlickSlider>
      </StyledSlickWrapper>

      <Container>
        <SlideContentHeader
          slider1={slider1}
          slider3={slider3}
          setSlider2={setSlider2}
          setSlider3={setSlider3}
        />
      </Container>

      <SlideShadow />
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

    ["& .thumbnail"]: {
      position: "absolute",
      zIndex: "1",

      width: "100%",
      height: "100%",

      backgroundImage:
        "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  };
});

export default Slider;
