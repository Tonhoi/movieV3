import { SyntheticEvent, useMemo, useState } from "react";
import { Box, Grid, Tab, styled } from "@mui/material";
import { get } from "lodash";
import { useRouter } from "next/router";

import { CardItem, TabPanel, Tabs } from "@/components";
import ActorHeading from "./Components/ActorHeading";
import { IPage, responseSchema } from "@/interfaces";
import { PEOPLEDETAILSCHEMA } from "@/interfaces/responseSchema/peopleDetail";

export type MoviePageProps = IPage<[responseSchema<PEOPLEDETAILSCHEMA>, any, any]>;

const ActorInfo = ({ initData }: MoviePageProps) => {
  const dataDetailPerson = get(initData, "0");
  const dataMovieCredit = get(initData, "1");
  const dataTvCredit = get(initData, "2");

  // const {
  //   profile_path,
  //   name,
  //   known_for_department,
  //   birthday,
  //   place_of_birth,
  //   biography,
  // } = dataDetailPerson;

  const [value, setValue] = useState<number>(0);
  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const router = useRouter();

  const renderMovieCredit = useMemo(() => {
    if (dataMovieCredit?.cast == "undefined") return null;
    return dataMovieCredit?.cast.map((data: any, idx: number) => {
      const { vote_average, poster_path, title, id } = data;
      return (
        <Grid item lg={2} md={3} sm={6} key={idx}>
          <CardItem
            animation
            vote_average={vote_average}
            poster_path={poster_path}
            title={title}
            id={id}
          />
        </Grid>
      );
    });
  }, [dataMovieCredit]);

  const renderTvCredit = useMemo(() => {
    if (dataTvCredit?.cast == "undefined") return null;
    return dataTvCredit?.cast.map((data: any, idx: number) => {
      const { original_name, name, vote_average, poster_path, id } = data;
      return (
        <Grid item lg={2} md={3} sm={6} key={idx}>
          <CardItem
            original_name={original_name}
            name={name}
            vote_average={vote_average}
            poster_path={poster_path}
            id={id}
            animation
          />
        </Grid>
      );
    });
  }, [dataTvCredit]);

  if (router.isFallback) return <Box>loading...</Box>;

  return (
    <Container>
      <ActorHeading data={dataDetailPerson} />

      <Box className={"actor-content"}>
        <Box className={"tabs-wrapper"}>
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
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    paddingTop: 120,

    ["& .actor-content"]: {
      ["& .tabs-wrapper"]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
      },
    },
  };
});

export default ActorInfo;
