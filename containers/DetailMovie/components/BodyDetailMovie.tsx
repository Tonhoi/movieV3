import { Box, Container as MuiContainer, Grid, Tab, styled } from "@mui/material";
import { useState } from "react";

import { CardItem, CardItem2, CastCardItem, TabPanel, Tabs } from "@/components";

const BodyDetailMovie = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box className={"tabs-wrapper"}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Episodes" value={0} />
          <Tab label="Cast" value={1} />
          <Tab label="Recommended" value={2} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {Array(20)
            .fill(null)
            .map((el, idx: number) => (
              <Grid item lg={3} md={3} sm={4} xs={6} key={idx}>
                <CardItem2 />
              </Grid>
            ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          {Array(6)
            .fill(null)
            .map((el, idx: number) => (
              <Grid item lg={4} md={6} sm={6} xs={12} key={idx}>
                <CastCardItem />
              </Grid>
            ))}
        </Grid>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container columns={12} spacing={2}>
          {Array(30)
            .fill(null)
            .map((el, idx: number) => (
              <Grid item lg={2} md={2.4} sm={4} xs={6} key={idx}>
                <CardItem animation />
              </Grid>
            ))}
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
