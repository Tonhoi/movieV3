import { SyntheticEvent, useState } from "react";
import { Box, Tab, styled, Container as MuiContainer } from "@mui/material";
import { get } from "lodash";
import { useRouter } from "next/router";

import { TabPanel, Tabs } from "@/components";
import IntroArtist from "./Components/IntroArtist";
import { ArtistPageProps } from "@/pages/artist-info/[id]";
import MovieCredit from "./Components/MovieCredit";
import TvCredit from "./Components/TvCredit";
import Loading from "@/components/Loading";

const ArtistInfo = ({ initData }: ArtistPageProps) => {
  const dataDetailPerson = get(initData, "0");
  const dataMovieCredit = get(initData, "1");

  const dataTvCredit = get(initData, "2");

  const [value, setValue] = useState<number>(0);
  const router = useRouter();

  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (router.isFallback) return <Loading />;

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
        <MovieCredit cast={dataMovieCredit.cast} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TvCredit cast={dataTvCredit.cast} />
      </TabPanel>
    </Container>
  );
};

const Container = styled(MuiContainer)(({ theme }) => {
  return {
    paddingTop: 120,

    [theme.breakpoints.down("md")]: {
      paddingTop: 90,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },

    ["& .tab-list"]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  };
});

export default ArtistInfo;
