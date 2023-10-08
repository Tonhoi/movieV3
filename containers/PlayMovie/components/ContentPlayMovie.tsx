import { useEffect, useMemo, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import { CardItem } from "@/components";
import InfoMovie from "@/components/InfoMovie";
import ArrowLeft from "@/compositions/Slick/ArrowLeft";
import ArrowRight from "@/compositions/Slick/ArrowRight";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { MOVIESCHEMA } from "@/interfaces/responseSchema/utils";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";
import { EPISODESCHEMA } from "@/interfaces/responseSchema/episode";

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
  dataRecomendationsMovie: Array<MOVIESCHEMA>;
  dataInfoMovie: Array<EPISODESCHEMA>;
  dataDetail: DetailMovie;
}

const ContentPlayMovie = ({
  dataRecomendationsMovie,
  dataInfoMovie,
  dataDetail,
}: ContentPlayMovieProps) => {
  const router = useRouter();
  const [dataDetailInfoMovie, setDataDetailInfoMovie] = useState<any>([]);

  const handleChangeSeason = (season_number: number) => {
    router.push(
      `/play/${router.query.type}/${router.query.id}?episode=1&season=${season_number}`
    );
  };

  const renderRecomendationsMovie = useMemo(() => {
    if (typeof dataRecomendationsMovie == "undefined") return null;

    return dataRecomendationsMovie.map((data, idx: number) => {
      const { vote_average, poster_path, title, id } = data;
      return (
        <CardItem
          animation
          key={idx}
          vote_average={vote_average}
          poster_path={poster_path}
          title={title}
          id={id}
        />
      );
    });
  }, [dataRecomendationsMovie]);

  useEffect(() => {
    if (typeof dataInfoMovie == "undefined") {
      return;
    }

    const text = dataInfoMovie.find((data: EPISODESCHEMA, idx: number) => {
      return String(data.episode_number) == router.query.episode;
    });
    setDataDetailInfoMovie(text);
  }, [dataInfoMovie, router]);

  const renderSeason = useMemo(() => {
    if (typeof dataDetail?.seasons == "undefined") return null;

    return dataDetail.seasons.map((data, idx: number) => (
      <Box
        key={idx}
        onClick={() => handleChangeSeason(data.season_number)}
        className={`season-item ${
          router.query.season == String(data.season_number) ? "active" : ""
        }`}
      >
        {data.name}
      </Box>
    ));
  }, [dataInfoMovie]);

  return (
    <Container>
      <Box className={"season-wrapper"}>{renderSeason}</Box>

      <Typography variant={"h3"} className={"title"}>
        {dataDetail.title ?? dataDetail.name}
      </Typography>

      <Box className={"content"}>
        <InfoMovie
          data={dataDetailInfoMovie?.length == 0 ? dataDetail : dataDetailInfoMovie}
        />

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

    ["& .season-wrapper"]: {
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      marginBottom: 16,

      ["& .season-item"]: {
        backgroundColor: "#399551",
        borderRadius: "4px",
        padding: "4px 16px",
        textAlign: "center",
        cursor: "pointer",

        ["&.active"]: {
          backgroundColor: "#1cc749",
        },
      },
    },

    ["& .content"]: {
      marginTop: 4,

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
