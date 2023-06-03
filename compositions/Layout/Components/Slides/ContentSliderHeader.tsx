import React, { Dispatch, SetStateAction } from "react";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";

import { PlayIcon, SaveIcon, StarIcon } from "@/components";

import SlideCardItem from "./SlideCardItem";
import SlickSlider from "@/compositions/Slick/SlickSlider";

interface ContentSliderHeaderprops {
  slider1: any;
  slider3: any;
  setSlider2: SetStateAction<Dispatch<SetStateAction<null>>>;
  setSlider3: SetStateAction<Dispatch<SetStateAction<null>>>;
}

const ContentSliderHeader = (props: ContentSliderHeaderprops) => {
  const { slider1, slider3, setSlider2, setSlider3 } = props;

  return (
    <StyledWrapper>
      <SlickSlider
        props={{
          fade: true,
        }}
        variant="simple"
        asNavFor={slider1}
        refSlick={(
          slider: ((prevState: null) => null) & Dispatch<SetStateAction<null>>
        ) => setSlider3(slider)}
      >
        {Array(5)
          .fill(null)
          .map((el, idx) => (
            <Stack spacing={2} maxWidth={"50%"} key={idx}>
              <Typography variant="h2">Luận anh hùng</Typography>

              <StyledSection>
                <Typography variant="subtitle3">TOP 1</Typography>
                <Typography variant="subtitle3" padding={"0 6px 0"}>
                  High Popularity
                </Typography>
              </StyledSection>

              <StyledContentWrapper>
                <StarIcon style={{ width: 12, height: 12 }} />
                <Typography variant="body2" color={"rgb(28, 199, 73)"}>
                  9.7
                </Typography>
                <StyledDivider orientation="vertical" light />

                <Typography variant="h6">2017</Typography>
                <StyledDivider orientation="vertical" light />

                <Typography variant="h6">C13</Typography>
                <StyledDivider orientation="vertical" light />

                <Typography variant="h6">24 Episodes</Typography>
              </StyledContentWrapper>

              <StyledContentWrapper>
                <StyledGenreMovie variant="h6">Chinese Mainland</StyledGenreMovie>
              </StyledContentWrapper>

              <StyledDesctiption variant="h5">
                To buy a couture wedding dress for a customer, fashion buyer Gu Xixi
                sneaks into a high-end party where she knows a bossy president Yin Sichen
                with a series of lies and becomes his contracted wife for three months.
                The inexperienced bossy president and the cute and cunning girl start a
                love game. Through all kinds of tests, Yin Sichen helps Gu Xixi realize
                her dream of becoming a designer and establish her own fashion brand,
                making her as outstanding as him.
              </StyledDesctiption>

              <StyledContentWrapper>
                <PlayIcon />

                <SaveIcon />
              </StyledContentWrapper>
            </Stack>
          ))}
      </SlickSlider>

      <Box position={"relative"} width={"100%"}>
        <SlickSlider
          variant="multiple"
          asNavFor={slider1 && slider3}
          refSlick={(
            slider: ((prevState: null) => null) & Dispatch<SetStateAction<null>>
          ) => setSlider2(slider)}
        >
          {Array(5)
            .fill(null)
            .map((el, idx) => (
              <SlideCardItem key={idx} />
            ))}
        </SlickSlider>
      </Box>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    marginTop: theme.spacing(10),
    // transform: "translateY(-50%)",
    zIndex: 4,

    color: "#ECECEC",
  };
});

const StyledContentWrapper = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",

    "& svg": {
      width: 50,
      height: 50,

      cursor: "pointer",

      ":hover": { opacity: 0.8, transition: "opacity linear 0.3s" },
    },
  };
});

const StyledDesctiption = styled(Typography)(({ theme }) => {
  return {
    maxWidth: "80%",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",

    textAlign: "justify",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  };
});

const StyledGenreMovie = styled(Typography)(() => {
  return {
    padding: "5px",
    background: "rgba(255, 255, 255, 0.08)",
    borderRadius: "2px",
  };
});

const StyledDivider = styled(Divider)(() => {
  return {
    width: 2,
    height: 12,

    background: "rgba(255, 255, 255, 0.2)",
  };
});

const StyledSection = styled(Stack)(() => {
  return {
    width: "fit-content",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",

    borderRadius: "2px",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.2)",

    ["& span:first-of-type"]: {
      padding: "2px 6px",

      backgroundImage: "linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%)",
    },
  };
});

export default ContentSliderHeader;
