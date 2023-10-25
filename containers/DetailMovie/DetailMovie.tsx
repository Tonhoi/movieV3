import { SyntheticEvent, useState } from "react";
import { get } from "lodash";
import { Box, Tab, styled, Container as MuiContainer } from "@mui/material";
import { useRouter } from "next/router";

import { useToggle } from "@/hooks";
import { TabPanel, Tabs, Loading } from "@/components/common";
import { DetailPageProps } from "@/pages/detail/[type]/[id]";
import {
  IntroMovie,
  RecommendMovie,
  TrailerMovie,
  UserReview,
} from "@/containers/DetailMovie/components";

const DetailMovie = ({ initData }: DetailPageProps) => {
  const dataDetailMovie = get(initData, "0");
  const dataCreditMovie = get(initData, "1");
  const dataReviews = get(initData, "2");
  const dataRecommendations = get(initData, "3");

  const router = useRouter();

  const [value, setValue] = useState<number>(0);
  const {
    on: isOpenTrailerMovie,
    toggleOff: handleCloseTrailerMovie,
    toggleOn: handleOpenTrailerMovie,
  } = useToggle();

  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (router.isFallback) return <Loading />;
  return (
    <Container>
      <IntroMovie
        dataDetailMovie={dataDetailMovie}
        dataCreditMovie={dataCreditMovie}
        handleOpenTrailerMovie={handleOpenTrailerMovie}
      />

      <TrailerMovie
        isOpenTrailerMovie={isOpenTrailerMovie}
        handleCloseTrailerMovie={handleCloseTrailerMovie}
      />

      <MuiContainer>
        <Tabs value={value} onChange={handleChangeTabs} className="tab-list">
          <Tab label="Reviews" value={0} />
          <Tab label="Recommended" value={1} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <UserReview data={dataReviews.results} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <RecommendMovie data={dataRecommendations.results} />
        </TabPanel>
      </MuiContainer>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .tab-list"]: {
      borderBottom: 8,
      marginBottom: 24,
    },
  };
});

export default DetailMovie;
