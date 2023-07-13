import { Fragment, ReactNode, useMemo } from "react";
import { Box, Grid, Container as MuiContainer, Typography, styled } from "@mui/material";
import { get } from "lodash";

import { CardItem, CardItem2, TopTrendingCarditem } from "@/components";
import { IPage, responseSchema } from "@/interfaces";
import UpcomingCardItem from "@/components/Card/UpcomingCardItem";
import ArtistCardItem from "@/components/Card/ArtistCardItem";
import { MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";
import { PEOPLELISTSCHEMA } from "@/interfaces/responseSchema/peopleList";

export type HomePageProps = IPage<
  [
    responseSchema<MOVIESCHEMA>,
    responseSchema<MOVIESCHEMA>,
    responseSchema<TVSCHEMA>,
    responseSchema<PEOPLELISTSCHEMA>,
    responseSchema<MOVIESCHEMA>
  ]
>;

const Home = ({ initData }: HomePageProps) => {
  const dataTrendingMovie = get(initData[0], "results").slice(0, 9);
  const dataUpComingMovie = get(initData[1], "results").slice(0, 12);
  const dataAiringToday = get(initData[2], "results").slice(0, 6);
  const dataTrendingPerson = get(initData[3], "results").slice(0, 12);
  const dataNowPlaying = get(initData[4], "results").slice(0, 12);

  const renderTredingMovie = useMemo(() => {
    if (typeof dataTrendingMovie === "undefined") return null;

    return dataTrendingMovie.map((data, idx: number) => {
      return <TopTrendingCarditem key={data.id} data={data} idx={idx} />;
    });
  }, [dataTrendingMovie]);

  const renderAiringToday = useMemo(() => {
    if (typeof dataAiringToday == "undefined") return null;

    return dataAiringToday.map((data, idx: number) => {
      const { poster_path, popularity, id, original_name, name } = data;

      return (
        <Grid item lg={2} md={2} sm={4} xs={6} key={idx}>
          <CardItem2
            poster_path={poster_path}
            popularity={popularity}
            id={id}
            original_name={original_name}
            name={name}
            sx={{
              ["& .card-image"]: {
                aspectRatio: "210 / 290",
              },
            }}
          />
        </Grid>
      );
    });
  }, [dataAiringToday]);

  const renderNowPlaying = useMemo(() => {
    if (typeof dataNowPlaying == "undefined") return null;

    return dataNowPlaying.map((data, idx: number) => {
      const { vote_average, poster_path, title, id } = data;
      return (
        <Grid item lg={2} md={2} sm={3} xs={4} key={idx}>
          <CardItem
            vote_average={vote_average}
            poster_path={poster_path}
            title={title}
            id={id}
          />
        </Grid>
      );
    });
  }, [dataNowPlaying]);

  const renderTrendingPerson = useMemo(() => {
    if (typeof dataTrendingPerson == "undefined") return null;

    return dataTrendingPerson.map((data, idx: number) => (
      <Grid item lg={2} md={2} sm={3} xs={4} key={idx}>
        <ArtistCardItem data={data} />
      </Grid>
    ));
  }, [dataTrendingPerson]);

  const renderUpComingMovie = useMemo(() => {
    if (typeof dataUpComingMovie == "undefined") return null;
    return dataUpComingMovie.map((data, idx: number) => {
      const { backdrop_path, title, original_title, vote_average, popularity, id } = data;

      return (
        <Grid item lg={3} md={4} sm={6} xs={12} key={idx}>
          <UpcomingCardItem
            backdrop_path={backdrop_path}
            title={title}
            original_title={original_title}
            vote_average={vote_average}
            popularity={popularity}
            id={id}
          />
        </Grid>
      );
    });
  }, [dataUpComingMovie]);

  return (
    <Container>
      <HomeComponent title="Bảng xếp hạng">
        <Box className={"topTrending-wrapper"}>{renderTredingMovie}</Box>
      </HomeComponent>

      <HomeComponent title="Hôm nay xem gì?">
        <Grid container spacing={3}>
          {renderAiringToday}
        </Grid>
      </HomeComponent>

      <HomeComponent title="Nghệ sĩ được quan tâm">
        <Grid container spacing={3}>
          {renderTrendingPerson}
        </Grid>
      </HomeComponent>

      <HomeComponent title="Phim đang được chiếu tại rạp">
        <Grid container spacing={3}>
          {renderNowPlaying}
        </Grid>
      </HomeComponent>

      <HomeComponent title="Phim sắp khởi chiếu">
        <Grid container spacing={3}>
          {renderUpComingMovie}
        </Grid>
      </HomeComponent>
    </Container>
  );
};

const HomeComponent = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <Fragment>
      <Typography variant={"h3"} className={"title"}>
        {title}
      </Typography>
      {children}
    </Fragment>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    ["& > .title"]: {
      position: "relative",
      marginBottom: 42,
      marginTop: 32,

      ["&:after"]: {
        content: '""',
        position: "absolute",
        top: "calc(100% + 12px)",
        left: 0,
        width: "100%",
        height: 1,
        backgroundColor: "#595959",
      },
    },

    ["& .topTrending-wrapper"]: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "0.75rem",

      [theme.breakpoints.down("md")]: {
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        scrollSnapType: "x mandatory",

        ["&::-webkit-scrollbar"]: {
          display: "none",
        },
      },

      ["& .topTrending-container:first-of-type"]: {
        gridRow: "span 2",
        gridColumn: "span 2",
      },
    },
  };
});

export default Home;
