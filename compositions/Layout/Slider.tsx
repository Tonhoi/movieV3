import { SetStateAction, useEffect, useMemo, useState } from "react";
import { Box, Container as MuiContainer, Stack, Typography, styled } from "@mui/material";
import useSWR from "swr";

import SlickSlider from "../Slick/SlickSlider";
import SlideShadow from "./Components/Slider/SlideShadow";
import { CardItem3 } from "@/components";
import { PopularMovie } from "@/interfaces/responseSchema/popularMovie";
import { RESPONSEDATA as ResponseData } from "@/interfaces/responseSchema/utils";
import { transformUrl } from "@/libs";
import { TYPE_PARAMS } from "@/apis";

const Slider = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  const { data: dataPopularMovie } = useSWR(
    transformUrl(TYPE_PARAMS["movie_popular"], {
      language: "en-US",
      page: 1,
    })
  );
  const renderThumbnail = useMemo(() => {
    if (typeof dataPopularMovie == "undefined") return null;

    return dataPopularMovie.results.map((data: PopularMovie) => {
      const { backdrop_path, id } = data;

      return (
        <StyledThumbnailWrapper
          className="thumbnail-wrapper"
          backdrop_path={backdrop_path}
          key={id}
        >
          <Box className="thumbnail" />;
        </StyledThumbnailWrapper>
      );
    });
  }, [dataPopularMovie]);

  const renderSlideContent = useMemo(() => {
    if (typeof dataPopularMovie?.results == "undefined") return null;
    return dataPopularMovie?.results.map((data: PopularMovie) => (
      <CardItem3
        key={data.id}
        data={data}
        sx={{
          ["& .card-image"]: {
            aspectRatio: "302 / 400",
          },
        }}
      />
    ));
  }, [dataPopularMovie?.results]);

  return (
    <Container>
      <StyledSlickWrapper>
        <SlickSlider
          variant="simple"
          asNavFor={slider2}
          refSlick={(slider: SetStateAction<null>) => setSlider1(slider)}
          props={{
            fade: true,
          }}
        >
          {renderThumbnail}
        </SlickSlider>
      </StyledSlickWrapper>

      <MuiContainer>
        <Box className={"sub-slide"}>
          <Typography variant={"h3"} marginLeft={"9.6px"}>
            Popular
          </Typography>

          <SlickSlider
            variant="multiple"
            asNavFor={slider1}
            refSlick={(slider: SetStateAction<null>) => setSlider2(slider)}
            props={{ arrows: true }}
          >
            {renderSlideContent}
          </SlickSlider>
        </Box>
      </MuiContainer>

      <SlideShadow />
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    position: "relative",

    justifyContent: "center",
    height: 700,

    [theme.breakpoints.down("md")]: {
      height: 500,
    },

    [theme.breakpoints.down("sm")]: {
      height: 400,
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

    ["& .sub-slide"]: {
      position: "relative",
      zIndex: 4,
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

const StyledThumbnailWrapper = styled(Box, {
  shouldForwardProp: (propName) => propName !== "backdrop_path",
})<{ backdrop_path: string }>(({ backdrop_path, theme }) => {
  return {
    position: "relative",

    height: 700,

    [theme.breakpoints.down("md")]: {
      height: 500,
    },

    [theme.breakpoints.down("sm")]: {
      height: 400,
    },

    ["& .thumbnail"]: {
      position: "absolute",
      zIndex: 1,

      width: "100%",
      height: "100%",

      backgroundImage: `url(https://image.tmdb.org/t/p//w1280${backdrop_path})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  };
});

export default Slider;
