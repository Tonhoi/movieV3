import { Fragment } from "react";
import { Grid } from "@mui/material";

import { ArtistCardItem } from "@/components";
import { PEOPLELISTSCHEMA } from "@/interfaces/responseSchema/peopleList";
import HeadingMovie from "./HeadingMovie";

interface PopularArtistProps {
  data: Array<PEOPLELISTSCHEMA>;
}

const PopularArtist = ({ data }: PopularArtistProps) => {
  return (
    <Fragment>
      <HeadingMovie title="Nghệ sĩ được quan tâm" />

      <Grid container spacing={3}>
        {data &&
          data.map((el) => (
            <Grid item lg={2} md={2} sm={3} xs={4} key={el.id}>
              <ArtistCardItem data={el} />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default PopularArtist;
