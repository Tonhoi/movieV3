import { SyntheticEvent, useState } from "react";
import { Box, Tab, styled, Container as MuiContainer } from "@mui/material";
import { get } from "lodash";
import { useRouter } from "next/router";

import { TabPanel, Tabs } from "@/components/common";
import IntroArtist from "./components/IntroArtist";
import { ArtistPageProps } from "@/pages/artist-info/[id]";
import MovieCredit from "./components/MovieCredit";
import Loading from "@/components/common/Loading";
import { MENU_TEXT } from "@/constants";

const ArtistInfo = ({ initData }: ArtistPageProps) => {
  const dataArtistDetail = get(initData, "0");
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
      <IntroArtist data={dataArtistDetail} />

      <Box className={"tab-list"}>
        <Tabs value={value} onChange={handleChangeTabs}>
          <Tab label={MENU_TEXT.movie} value={0} />
          <Tab label={MENU_TEXT.tv} value={1} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <MovieCredit cast={dataMovieCredit.cast} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <MovieCredit cast={dataTvCredit.cast} />
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
