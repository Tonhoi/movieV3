import { get } from "lodash";
import { useRouter } from "next/router";
import { Box, Skeleton, styled } from "@mui/material";

import BodyDetailMovie from "./components/BodyDetailMovie";
import HeadingDetailMovie from "./components/HeadingDetailMovie";
import { Credit } from "@/interfaces/responseSchema/credits";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";
import { useToggle } from "@/hooks";
import { Overlay } from "@/components";
import Embeded from "@/components/Embeded";

export type DetailPageProps = {
  initData: [DetailMovie, Credit];
};

const DetailMovie = ({ initData }: DetailPageProps) => {
  const {
    on: isOpenTrailerMovie,
    toggleOff: handleCloseTrailerMovie,
    toggleOn: handleOpenTrailerMovie,
  } = useToggle();

  const dataDetailMovie = get(initData, "0");
  const dataCreditMovie = get(initData, "1");

  const { query } = useRouter();

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

      <BodyDetailMovie
        dataDetailMovie={dataDetailMovie}
        dataCreditMovie={dataCreditMovie}
      />
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    póition: "relative",

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
