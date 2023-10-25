import { useEffect, useMemo, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";

import InfoMovie from "@/containers/PlayMovie/components/InfoMovie";
import { CardItem, ArrowLeft, ArrowRight, SlickSlider } from "@/components/common";
import { MovieProps } from "@/interfaces/responseSchema/utils";
import DetailMovie from "@/interfaces/responseSchema/DetailMovie";
import { EpisodeProps } from "@/interfaces/responseSchema/episode";

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
  dataRecomendationsMovie: Array<MovieProps>;
  dataEpisodes: Array<EpisodeProps>;
  dataDetailMovie: DetailMovie;
}

const ContentPlayMovie = (props: ContentPlayMovieProps) => {
  const { dataRecomendationsMovie, dataEpisodes, dataDetailMovie } = props;

  const router = useRouter();
  const [dataEpisode, setDataEpisode] = useState<any>({});

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
    if (typeof dataEpisodes == "undefined") {
      return;
    }

    const result = dataEpisodes.find((data: EpisodeProps, idx: number) => {
      return String(data.episode_number) == router.query.episode;
    });

    setDataEpisode(result);
  }, [dataEpisodes, router]);

  const renderSeason = useMemo(() => {
    if (typeof dataDetailMovie?.seasons == "undefined") return null;

    return dataDetailMovie.seasons.map((data, idx: number) => (
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
  }, [dataEpisodes]);

  return (
    <Container>
      <Box className={"season-wrapper"}>{renderSeason}</Box>

      <Typography variant={"h3"} className={"title"}>
        {dataDetailMovie.title ?? dataDetailMovie.name}
      </Typography>

      <Box className={"content"}>
        <InfoMovie data={dataEpisode} />

        <Box className={"recommended-movie"}>
          {dataRecomendationsMovie?.length !== 0 && (
            <Typography variant={"h3"} className={"name"}>
              Có thể bạn quan tâm
            </Typography>
          )}

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
    color: theme.palette.text_color.main,

    ["& .season-wrapper"]: {
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      marginBottom: 16,

      ["& .season-item"]: {
        backgroundColor: theme.palette.mode === "light" ? "#fff" : "#399551",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",

        borderRadius: "4px",
        padding: "4px 16px",
        textAlign: "center",
        cursor: "pointer",

        ["&.active"]: {
          backgroundColor: "#1cc749",
          color: "#fff",
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
