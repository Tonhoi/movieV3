import { Fragment } from "react";
import { Grid } from "@mui/material";

import { UpcomingCardItem } from "@/components";
import { MovieProps } from "@/interfaces/responseSchema/utils";
import HeadingMovie from "./HeadingMovie";

interface UpcomingMovieProps {
  data: Array<MovieProps>;
}

const UpcomingMovie = ({ data }: UpcomingMovieProps) => {
  return (
    <Fragment>
      <HeadingMovie title={"Phim sắp khởi chiếu"} />

      <Grid container spacing={3}>
        {data &&
          data.map((el) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={el.id}>
              <UpcomingCardItem
                backdrop_path={el.backdrop_path}
                title={el.title}
                original_title={el.original_title}
                vote_average={el.vote_average}
                popularity={el.popularity}
                id={el.id}
              />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default UpcomingMovie;