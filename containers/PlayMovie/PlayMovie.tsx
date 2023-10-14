import useSWR from "swr";
import { Box, styled, Container as MuiContainer, Grid } from "@mui/material";
import { get } from "lodash";
import { useRouter } from "next/router";

import Comment from "./components/Comment/Comment";
import ContentPlayMovie from "./components/ContentPlayMovie";
import { PlayMoviePageProps } from "@/pages/play/[type]/[id]";
import Loading from "@/components/Loading";
import HeadingPlayMovie from "./components/HeadingPlayMovie";

const PlayMovie = ({ initData }: PlayMoviePageProps) => {
  const router = useRouter();
  const dataRecomendationsMovie = get(initData, "0");
  const dataDetail = get(initData, "1");

  const { data } = useSWR(
    `/${router.query.type}/${router.query.id}/season/${router.query.season}?language=en-US`
  );

  if (router.isFallback) return <Loading />;
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
        </Grid>

        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Box className={"content"}>
            <Comment />
          </Box>
        </Grid>
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
