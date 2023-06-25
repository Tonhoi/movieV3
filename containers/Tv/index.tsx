import { get } from "lodash";
import { useCallback, useMemo } from "react";
import useSWR from "swr";
import { Box, styled, Container as MuiContainer, Grid } from "@mui/material";

import { CardItem } from "@/components";
import { useParams } from "@/hooks/useParams";
import Pagination from "@/components/Pagination";
import { transformUrl } from "@/libs";
import { TYPE_PARAMS } from "@/apis";

const Tv = ({ initData }: any) => {
  const dataDiscoverTv = get(initData, "0");

  const { total_pages, page } = dataDiscoverTv;

  const { params, setParams } = useParams({
    initState: {
      page,
    },
  });

  const { data, isLoading } = useSWR(
    transformUrl(TYPE_PARAMS["discover_tv"], {
      include_adult: false,
      include_null_first_air_dates: false,
      language: "en-US",
      page: params.page,
      sort_by: "popularity.desc",
    })
  );

  const renderTv = useMemo(() => {
    if (typeof data == "undefined") return null;

    return data.results.map((data: any) => (
      <Grid item lg={3} md={3} sm={5} xs={7.5} key={data.id} margin={"20px 0"}>
        <CardItem data={data} animation />
      </Grid>
    ));
  }, [data]);

  const handlePagination = useCallback(
    (event: React.ChangeEvent<unknown>, page: number) => {
      setParams({
        page,
      });
    },
    []
  );

  return (
    <MuiContainer>
      <Container>
        <Grid container columns={15} spacing={3}>
          {renderTv}
        </Grid>

        <Pagination
          count={total_pages as number}
          onChange={handlePagination}
          defaultPage={+params.page}
        />
      </Container>
    </MuiContainer>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: theme.spacing(10),
  };
});

export default Tv;
