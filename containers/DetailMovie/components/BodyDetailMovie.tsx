import {
  Box,
  Container as MuiContainer,
  Grid,
  Tab,
  styled,
  useTheme,
} from "@mui/material";
import { SyntheticEvent, useMemo, useState } from "react";
import Select from "react-select";
import useSWR from "swr";

import { CardItem2, CastCardItem, TabPanel, Tabs } from "@/components";
import { DetailMovie } from "@/interfaces/responseSchema/DetailMovie";
import { Credit } from "@/interfaces/responseSchema/credits";
import { transformUrl } from "@/libs";

interface BodyDetailMovieProps {
  dataCreditMovie: Credit;
  dataDetailMovie: DetailMovie;
}

const BodyDetailMovie = ({ dataCreditMovie, dataDetailMovie }: BodyDetailMovieProps) => {
  const theme = useTheme();

  const [value, setValue] = useState<number>(0);

  const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [selectedOptions, setSelectedOptions] = useState<any>({
    air_date: "",
    episode_count: 0,
    id: 0,
    name: "Season 0",
    overview: "",
    poster_path: "",
    season_number: 0,
  });

  const { data } = useSWR(
    typeof dataDetailMovie?.id !== "undefined"
      ? transformUrl(
          `/tv/${dataDetailMovie.id}/season/${selectedOptions?.season_number}`,
          {
            language: "en-US",
          }
        )
      : null
  );

  const renderCastCardItem = useMemo(() => {
    if (typeof dataCreditMovie?.cast == "undefined") return null;

    return dataCreditMovie.cast.map((data, idx: number) => (
      <Grid item lg={4} md={6} sm={6} xs={12} key={idx}>
        <CastCardItem key={idx} data={data} />
      </Grid>
    ));
  }, [dataCreditMovie]);

  const renderSessonTv = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.episodes.map((data: any, idx: number) => (
      <Grid item lg={3} md={3} sm={4} xs={6} key={idx}>
        <CardItem2 data={data} />
      </Grid>
    ));
  }, [data]);

  const customGetOptionLabel = (option: any) => {
    if (option.name === "Specials") return "season 0";

    return option.name;
  };
  const customGetOptionValue = (option: any) => option.id;

  return (
    <Container>
      <Box className={"tabs-wrapper"}>
        <Tabs value={value} onChange={handleChangeTabs}>
          <Tab label="Episodes" value={0} />
          <Tab label="Cast" value={1} />
          <Tab label="Recommended" value={2} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Select
          value={selectedOptions}
          onChange={setSelectedOptions}
          options={dataDetailMovie?.seasons}
          getOptionLabel={customGetOptionLabel}
          getOptionValue={customGetOptionValue}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              color: "rgb(230, 230, 230)",
              backgroundColor: "transparent",
            }),

            input: (baseStyle, state) => ({
              ...baseStyle,
              color: theme.palette.common.white,
            }),

            option: (baseStyle, props) => ({
              ...baseStyle,
              color: theme.palette.common.black,
            }),

            singleValue: (base, props) => ({
              ...base,
              color: theme.palette.common.white,
            }),
          }}
        />

        <Grid container spacing={2} marginTop={theme.spacing(2)}>
          {renderSessonTv}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {renderCastCardItem}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container columns={12} spacing={2}>
          hello word
        </Grid>
      </TabPanel>
    </Container>
  );
};

const Container = styled(MuiContainer)(() => {
  return {
    ["& .tabs-wrapper"]: {
      borderBottom: 8,
      marginBottom: 24,
    },
  };
});

export default BodyDetailMovie;
