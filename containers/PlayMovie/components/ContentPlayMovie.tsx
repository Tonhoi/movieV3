import { useMemo } from "react";
import { Box, Typography, styled } from "@mui/material";

import { CardItem } from "@/components";
import InfoMovie from "@/components/InfoMovie";
import ArrowLeft from "@/compositions/Slick/ArrowLeft";
import ArrowRight from "@/compositions/Slick/ArrowRight";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { PopularMovie } from "@/interfaces";
import { PlayMoviePageProps } from "../PlayMovie";

const reponsiveSlider = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      arrows: true,
    },
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 3,
      arrows: true,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      arrows: true,
    },
  },
];

interface ContentPlayMovieProps {
  data: PopularMovie[];
  dataDetail: any;
}

const ContentPlayMovie = ({ data, dataDetail }: ContentPlayMovieProps) => {
  const renderRecomendationsMovie = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.map((data: any, idx: number) => (
      <CardItem animation key={idx} data={data} />
    ));
  }, [data]);

  return (
    <Container>
      <Typography variant={"h3"} className={"title"}>
        {dataDetail.title ?? data.original_title}
      </Typography>

      <Box className={"content"}>
        <InfoMovie data={dataDetail} />

        <Box className={"recommended-movie"}>
          <Typography variant={"h3"} className={"name"}>
            Recommended
          </Typography>

          <SlickSlider
            variant="multiple"
            props={{
              arrows: true,
              nextArrow: <ArrowRight />,
              prevArrow: <ArrowLeft />,
              slidesToShow: 5,
              slidesToScroll: 1,
              responsive: reponsiveSlider,
            }}
          >
            {renderRecomendationsMovie}
          </SlickSlider>
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: 14,

    ["& .content"]: {
      marginTop: 14,

      ["& .recommended-movie"]: {
        marginTop: 40,
        marginBottom: 12,
        ["& .name"]: {
          marginBottom: 16,
        },

        ["& svg"]: {
          color: theme.palette.common.white,
        },
      },
    },
  };
});

export default ContentPlayMovie;
