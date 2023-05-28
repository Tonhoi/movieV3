import { Box, Container, styled, useTheme } from "@mui/material";

import ContentSliderItem from "./Components/ContentSliderItem";

const Slider = () => {
  const theme = useTheme();
  return (
    <StyledWrapper>
      <StyledWrapperBoxshadow>
        <StyledBoxShadowLeft></StyledBoxShadowLeft>

        <StyledBoxShadowCenter></StyledBoxShadowCenter>

        <StyledBoxShadowRight></StyledBoxShadowRight>
      </StyledWrapperBoxshadow>

      <StyledThumbnail className="thumbnail"></StyledThumbnail>

      <Container>
        <ContentSliderItem />
      </Container>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(() => {
  return {
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    height: "100vh",

    backgroundImage:
      "url(https://pic3.iqiyipic.com/common/lego/20210106/94ef2528d3f94727aa8af0924faf7412.webp)",
  };
});

const StyledWrapperBoxshadow = styled(Box)(() => {
  return {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,

    display: "flex",
    maxWidth: "1808px",
    width: "100%",
    height: "100%",
    margin: "0px auto",
    justifyContent: "space-between",

    webkitBoxPack: "justify",
  };
});

const StyledBoxShadowLeft = styled(Box)(() => {
  return {
    width: "30%",
    height: "100%",
    background:
      "linear-gradient(269deg, rgba(51, 22, 20, 0) 1%, rgba(51, 22, 20, 0.02) 10%, rgba(51, 22, 20, 0.05) 18%, rgba(51, 22, 20, 0.12) 25%, rgba(51, 22, 20, 0.2) 32%, rgba(51, 22, 20, 0.29) 38%, rgba(51, 22, 20, 0.39) 44%, rgba(51, 22, 20, 0.5) 50%, rgba(51, 22, 20, 0.61) 57%, rgba(51, 22, 20, 0.71) 63%, rgba(51, 22, 20, 0.8) 69%, rgba(51, 22, 20, 0.88) 76%, rgba(51, 22, 20, 0.95) 83%, rgba(51, 22, 20, 0.98) 91%, rgb(51, 22, 20) 100%)",
    zIndex: 2,
  };
});

const StyledBoxShadowCenter = styled(Box)(() => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 2,

    width: "100%",
    height: "120px",

    backgroundImage:
      "linear-gradient(179.5deg, rgba(17, 19, 25, 0.88) 0%, rgba(17, 19, 25, 0.89) 9%, rgba(17, 19, 25, 0.85) 17%, rgba(17, 19, 25, 0.79) 24%, rgba(17, 19, 25, 0.72) 31%, rgba(17, 19, 25, 0.64) 37%, rgba(17, 19, 25, 0.55) 44%, rgba(17, 19, 25, 0.45) 50%, rgba(17, 19, 25, 0.35) 56%, rgba(17, 19, 25, 0.26) 63%, rgba(17, 19, 25, 0.18) 69%, rgba(17, 19, 25, 0.11) 76%, rgba(17, 19, 25, 0.05) 83%, rgba(17, 19, 25, 0.01) 91%, rgba(17, 19, 25, 0) 100%)",
  };
});

const StyledBoxShadowRight = styled(Box)(() => {
  return {
    zIndex: 2,

    width: "15%",
    height: "100%",

    background:
      "linear-gradient(90deg, rgba(51, 22, 20, 0) 1%, rgba(51, 22, 20, 0.02) 10%, rgba(51, 22, 20, 0.05) 18%, rgba(51, 22, 20, 0.12) 25%, rgba(51, 22, 20, 0.2) 32%, rgba(51, 22, 20, 0.29) 38%, rgba(51, 22, 20, 0.39) 44%, rgba(51, 22, 20, 0.5) 50%, rgba(51, 22, 20, 0.61) 57%, rgba(51, 22, 20, 0.71) 63%, rgba(51, 22, 20, 0.8) 69%, rgba(51, 22, 20, 0.88) 76%, rgba(51, 22, 20, 0.95) 83%, rgba(51, 22, 20, 0.98) 91%, rgb(51, 22, 20) 100%)",
  };
});

const StyledThumbnail = styled(Box)(() => {
  return {
    position: "relative",
    zIndex: "-1",
    width: "100%",
    height: "100%",

    // aspectRatio: "2 / 1",

    backgroundImage:
      "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    filter: "contrast(0.5)",
  };
});

export default Slider;
