import { SyntheticEvent, useMemo, useState } from "react";
import { get } from "lodash";
import { useRouter } from "next/router";
import {
  Box,
  Grid,
  Skeleton,
  Tab,
  styled,
  Container as MuiContainer,
} from "@mui/material";

import HeadingDetailMovie from "./components/HeadingDetailMovie";
import { CREDITSCHEMA } from "@/interfaces/responseSchema/credits";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";
import { useToggle } from "@/hooks";
import { CardItem, Overlay, TabPanel, Tabs } from "@/components";
import Embeded from "@/components/Embeded";
import Reviews from "./components/Reviews";
import { REVIEWSCHEMA } from "@/interfaces/responseSchema/reviews";
import { IPage, responseSchema } from "@/interfaces";
import { MOVIESCHEMA, TVSCHEMA } from "@/interfaces/responseSchema/utils";

export type DetailPageProps = IPage<
  [
    DetailMovie,
    CREDITSCHEMA,
    responseSchema<REVIEWSCHEMA>,
    responseSchema<TVSCHEMA & MOVIESCHEMA>
  ]
>;

const DetailMovie = ({ initData }: DetailPageProps) => {
  const { query, isFallback } = useRouter();

  if (isFallback) return <Box>Loading...</Box>;
  const {
    on: isOpenTrailerMovie,
    toggleOff: handleCloseTrailerMovie,
    toggleOn: handleOpenTrailerMovie,
  } = useToggle();

  const dataDetailMovie = get(initData, "0");
  const dataCreditMovie = get(initData, "1");
  const dataReviews = get(initData, "2");
  const dataRecommendations = get(initData, "3");

  const [value, setValue] = useState<number>(0);

  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const renderReviews = useMemo(() => {
    if (typeof dataReviews?.results == "undefined") return null;

    return dataReviews.results.map((data, idx: number) => (
      <Reviews key={idx} data={data} />
    ));
  }, [dataReviews]);

  const renderRecommendations = useMemo(() => {
    if (typeof dataRecommendations.results == "undefined") return null;

    return dataRecommendations.results.map((data, idx: number) => {
      const { original_name, name, vote_average, poster_path, title, id } = data;
      return (
        <Grid item lg={2} md={3} sm={4} xs={6} key={idx}>
          <CardItem
            key={idx}
            original_name={original_name}
            name={name}
            vote_average={vote_average}
            poster_path={poster_path}
            title={title}
            id={id}
          />
        </Grid>
      );
    });
  }, [dataRecommendations]);

  return (
    <Container>
      <HeadingDetailMovie
        dataDetailMovie={dataDetailMovie}
        dataCreditMovie={dataCreditMovie}
        handleOpenTrailerMovie={handleOpenTrailerMovie}
      />

      <Overlay
        className={isOpenTrailerMovie ? "active" : ""}
        backgroundColor="dark_60"
        onClick={handleCloseTrailerMovie}
      ></Overlay>

      {isOpenTrailerMovie && (
        <Box className={`trailer-movie-wrapper ${isOpenTrailerMovie ? "active" : ""}`}>
          <Embeded
            src={`https://autoembed.to/trailer/${query.type}/${query.id}`}
            className="embeded"
          />
          <Skeleton variant="rounded" width={"100%"} height={400} className="skeleton" />
        </Box>
      )}

      <MuiContainer>
        <Box className={"tabs-wrapper"}>
          <Tabs value={value} onChange={handleChangeTabs}>
            <Tab label="Reviews" value={0} />
            <Tab label="Recommended" value={1} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box className={"reviews-wrapper"}>{renderReviews}</Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container columns={12} spacing={2}>
            {renderRecommendations}
          </Grid>
        </TabPanel>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",

    ["& .reviews-wrapper"]: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: 8,
    },

    ["& .tabs-wrapper"]: {
      borderBottom: 8,
      marginBottom: 24,
    },

    ["& .trailer-movie-wrapper"]: {
      position: "fixed",
      top: "50%",
      left: "50%",
      zIndex: 99,
      transform: "translate(-50%, -50%)",
      width: 900,
      height: 400,
      maxWidth: "calc(100% - 24px)",
      display: "none",

      ["& .embeded"]: {
        position: "absolute",
        zIndex: 9,
      },

      ["& .skeleton"]: {
        backgroundColor: theme.palette.common.white,
      },

      ["&.active"]: {
        display: "block",
      },
    },
  };
});

export default DetailMovie;
