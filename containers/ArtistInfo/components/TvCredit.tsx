import { useCallback, useMemo, useState } from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";

import { CardItem } from "@/components";
import { v4 as uuidv4 } from "uuid";

interface TvCreditProps {
  cast: any;
}

const maxItems = 15;
const TvCredit = ({ cast }: TvCreditProps) => {
  const [count, setCount] = useState(0);

  const [nextdataMovieCredit, setNextdataMovieCredit] = useState(cast.slice(0, maxItems));
  const [prevDataMovieCredit, setPrevDataMovieCredit] = useState<Array<any>>([]);

  const renderCast = useMemo(() => {
    if (typeof nextdataMovieCredit == "undefined") return null;

    const results = nextdataMovieCredit.map((data: any) => (
      <Grid item lg={2} md={3} sm={6} xs={6} key={uuidv4()}>
        <CardItem
          animation
          vote_average={data.vote_average}
          poster_path={data.poster_path}
          title={data.title}
          id={data.id}
        />
      </Grid>
    ));

    const finalData = [...prevDataMovieCredit, ...results];

    setPrevDataMovieCredit((prev: any) => [...prev, ...results]);

    return finalData;
  }, [nextdataMovieCredit]);

  const handleClickLoadMore = useCallback(() => {
    const currentCount = count + maxItems;
    if (currentCount > cast.length) return null;

    const results = cast.slice(currentCount, currentCount + maxItems);

    setCount(currentCount);
    setNextdataMovieCredit(results);
  }, [count]);

  return (
    <Container>
      {cast.length == 0 ? (
        <Typography variant="caption" className={"no-results"}>
          Không có dữ liệu phim...
        </Typography>
      ) : (
        <Grid container columns={12} spacing={2}>
          {renderCast}
        </Grid>
      )}

      <Box className={`btn-wrapper ${count + maxItems > cast.length ? "hidden" : ""}`}>
        <Button variant="contained" onClick={handleClickLoadMore} className="btn">
          <Typography variant={"caption"} className="text">
            Xem thêm
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .no-results"]: {
      fontSize: 16,
    },

    ["& .btn-wrapper"]: {
      position: "relative",
      width: "fit-content",
      margin: "50px auto 0px",

      ["&.hidden"]: {
        display: "none",
      },

      ["& .btn"]: {
        border: "1px solid rgba(28,199,73,0.8)",
        boxShadow: "0px 4px 8px 0px rgba(28, 199, 73, 0.4)",

        ["& .text"]: {
          fontSize: 14,
        },
      },
    },
  };
});

export default TvCredit;
