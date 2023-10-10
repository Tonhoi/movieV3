import useSWR from "swr";
import { Box, styled, Container as MuiContainer, Grid } from "@mui/material";
import { get } from "lodash";
import { useRouter } from "next/router";

import HeadingPlayMovie from "./components/HeadingPlayMovie";
import Comment from "./components/Comment";
import ContentPlayMovie from "./components/ContentPlayMovie";
import { PlayMoviePageProps } from "@/pages/play/[type]/[id]";

const PlayMovie = ({ initData }: PlayMoviePageProps) => {
  const router = useRouter();
  const dataRecomendationsMovie = get(initData, "0");
  const dataDetail = get(initData, "1");

  if (router.isFallback) return <Box>Loading...</Box>;

  const { data } = useSWR(
    `/${router.query.type}/${router.query.id}/season/${router.query.season}?language=en-US`
  );

  return (
    <Container>
      <HeadingPlayMovie episodes={data?.episodes} />

      <Grid container>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <ContentPlayMovie
            dataRecomendationsMovie={dataRecomendationsMovie?.results}
            dataInfoMovie={data?.episodes}
            dataDetail={dataDetail}
          />
          <Box className={"content"}>
            <Comment />
          </Box>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}></Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    paddingTop: 86,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 12,
    },
  };
});

export default PlayMovie;
