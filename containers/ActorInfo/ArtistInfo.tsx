import { SyntheticEvent, useMemo, useState } from "react";
import { Box, Grid, Tab, styled, Container as MuiContainer } from "@mui/material";
import { get } from "lodash";

import { CardItem, TabPanel, Tabs } from "@/components";
import IntroArtist from "./Components/IntroArtist";
import { ArtistPageProps } from "@/pages/actor-info/[id]";
import { useRouter } from "next/router";

const ActorInfo = ({ initData }: ArtistPageProps) => {
  const dataDetailPerson = get(initData, "0");
  const dataMovieCredit = get(initData, "1");
  const dataTvCredit = get(initData, "2");

  const router = useRouter();

  const [value, setValue] = useState<number>(0);
  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (router.isFallback) return <Box>loading...</Box>;

  const renderMovieCredit = useMemo(() => {
    if (dataMovieCredit.cast == "undefined") return null;

    return dataMovieCredit.cast.map((data: any, idx: number) => (
      <Grid item lg={2} md={3} sm={6} key={idx}>
        <CardItem
          animation
          vote_average={data.vote_average}
          poster_path={data.poster_path}
          title={data.title}
          id={data.id}
        />
      </Grid>
    ));
  }, [dataMovieCredit]);

  const renderTvCredit = useMemo(() => {
    if (dataTvCredit.cast == "undefined") return null;

    return dataTvCredit.cast.map((data: any, idx: number) => (
      <Grid item lg={2} md={3} sm={6} key={idx}>
        <CardItem
          original_name={data.original_name}
          name={data.name}
          vote_average={data.vote_average}
          poster_path={data.poster_path}
          id={data.id}
          animation
        />
      </Grid>
    ));
  }, [dataTvCredit]);

  return (
    <Container>
      <IntroArtist data={dataDetailPerson} />

      <Box className={"tab-list"}>
        <Tabs value={value} onChange={handleChangeTabs}>
          <Tab label="Movie" value={0} />
          <Tab label="Tv" value={1} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container columns={12} spacing={2}>
          {renderMovieCredit}
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container columns={12} spacing={2}>
          {renderTvCredit}
        </Grid>
      </TabPanel>
    </Container>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    paddingTop: 120,

    ["& .tab-list"]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  };
});

export default ActorInfo;
