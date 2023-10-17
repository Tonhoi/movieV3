import { memo, useMemo, useRef } from "react";
import { Box, Container as MuiContainer, Stack, Typography, styled } from "@mui/material";
import useSWR from "swr";

import SlickSlider from "@/compositions/Slick/SlickSlider";
import { CardItem2 } from "@/components";
import { MOVIESCHEMA } from "@/interfaces/responseSchema/utils";
import { transformUrl } from "@/libs";
import { TYPE_PARAMS } from "@/apis";

const Slider = () => {
  const mainSlider = useRef<HTMLElement | null>(null);

  const { data: dataPopularMovie } = useSWR(
    transformUrl(TYPE_PARAMS["movie_popular"], {
      language: "en-US",
      page: 1,
    })
  );

  const renderBackdropPath = useMemo(() => {
    if (typeof dataPopularMovie == "undefined") return null;

    return dataPopularMovie.results.map((data: MOVIESCHEMA) => {
      const { backdrop_path, id } = data;

      return (
        <StyledBackdropItem
          key={id}
          className="backdrop-item"
          backdrop_path={backdrop_path}
        >
          <Box className={"backdrop"} />
        </StyledBackdropItem>
      );
    });
  }, [dataPopularMovie]);

  const renderSlideContent = useMemo(() => {
    if (typeof dataPopularMovie == "undefined") return null;

    return dataPopularMovie.results.map((data: MOVIESCHEMA) => {
      const { poster_path, title, popularity, id } = data;
      return (
        <CardItem2
          key={data.id}
          poster_path={poster_path}
          title={title}
          popularity={popularity}
          id={id}
        />
      );
    });
  }, [dataPopularMovie]);

  return (
    <Container>
      <Box className={"backdrop-list"}>
        <SlickSlider
          variant="simple"
          refSlick={mainSlider}
          props={{
            fade: true,
          }}
        >
          {renderBackdropPath}
        </SlickSlider>
      </Box>

      <MuiContainer>
        <Box className={"poster-list"}>
          <Typography variant={"h3"} marginLeft={"9.6px"}>
            Phổ biến
          </Typography>

          <SlickSlider
            variant="multiple"
            asNavFor={mainSlider.current}
            props={{ arrows: true }}
          >
            {renderSlideContent}
          </SlickSlider>
        </Box>
      </MuiContainer>

      <Box className={"box-shadow box-shadow-left"} />
      <Box className={"box-shadow box-shadow-top"} />
      <Box className={"box-shadow box-shadow-right"} />
    </Container>
  );
};

const Container = styled(Stack)(({ theme }) => {
  return {
    position: "relative",
    justifyContent: "center",
    height: 700,
    marginBottom: theme.spacing(10),

    [theme.breakpoints.down("md")]: {
      height: 500,
    },

    [theme.breakpoints.down("sm")]: {
      height: 400,
    },

    ["&::after"]: {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: 2,

      background: "linear-gradient(rgba(52,73,94,.255),#333 90%)",
    },

    ["& .poster-list"]: {
      position: "relative",
      zIndex: 4,
    },

    ["& .backdrop-list"]: {
      position: "absolute",
      width: "100%",
      height: "100%",
    },

    ["& .box-shadow"]: {
      position: "absolute",
      top: 0,
      zIndex: 3,

      ["&-left"]: {
        left: 0,
        width: "30%",
        height: "100%",
        background: theme.palette.gradientColor.gradient4,
      },

      ["&-top"]: {
        left: 0,
        width: "100%",
        height: "120px",
        background: theme.palette.gradientColor.gradient5,
      },

      ["&-right"]: {
        right: 0,
        width: "15%",
        height: "100%",
        background: theme.palette.gradientColor.gradient3,
      },
    },
  };
});

const StyledBackdropItem = styled(Box, {
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

    ["& .backdrop"]: {
      position: "absolute",
      inset: 0,
      zIndex: 1,

      backgroundImage: `url(https://image.tmdb.org/t/p//w1280${backdrop_path})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
    },
  };
});

export default memo(Slider);
