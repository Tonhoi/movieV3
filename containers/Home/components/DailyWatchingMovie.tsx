import { Fragment } from "react";
import { Grid } from "@mui/material";

import { CardItem2 } from "@/components";
import { TvProps } from "@/interfaces/responseSchema/utils";
import HeadingMovie from "./HeadingMovie";

interface DailyWatchingMovieProps {
  data: Array<TvProps>;
}

const DailyWatchingMovie = ({ data }: DailyWatchingMovieProps) => {
  return (
    <Fragment>
      <HeadingMovie title="Hôm nay xem gì?" />

      <Grid container spacing={3}>
        {data &&
          data.map((el) => (
            <Grid item lg={2} md={2} sm={4} xs={6} key={el.id}>
              <CardItem2
                poster_path={el.poster_path}
                popularity={el.popularity}
                id={el.id}
                original_name={el.original_name}
                name={el.name}
              />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default DailyWatchingMovie;