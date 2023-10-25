import { Grid } from "@mui/material";

import { CardItem } from "@/components/common";
import { MovieProps, TvProps } from "@/interfaces/responseSchema/utils";

interface RecommendMovieProps {
  data: Array<TvProps & MovieProps>;
}

const RecommendMovie = ({ data }: RecommendMovieProps) => {
  return (
    <Grid container columns={12} spacing={2}>
      {data &&
        data.map((el) => (
          <Grid item lg={2} md={3} sm={4} xs={6} key={el.id}>
            <CardItem
              key={el.id}
              original_name={el.original_name}
              name={el.name}
              vote_average={el.vote_average}
              poster_path={el.poster_path}
              title={el.title}
              id={el.id}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default RecommendMovie;
