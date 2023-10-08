import { Fragment } from "react";
import { Grid } from "@mui/material";

import { CardItem } from "@/components";
import { MOVIESCHEMA } from "@/interfaces/responseSchema/utils";
import HeadingMovie from "./HeadingMovie";

interface NowPlayingMovieProps {
  data: Array<MOVIESCHEMA>;
}

const NowPlayingMovie = ({ data }: NowPlayingMovieProps) => {
  return (
    <Fragment>
      <HeadingMovie title={"Phim đang được chiếu tại rạp"} />

      <Grid container spacing={3}>
        {data &&
          data.map((el) => (
            <Grid item lg={2} md={2} sm={3} xs={4} key={el.id}>
              <CardItem
                vote_average={el.vote_average}
                poster_path={el.poster_path}
                title={el.title}
                id={el.id}
                animation
              />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default NowPlayingMovie;
