import { TopTrendingCarditem } from "@/components";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { IPage, responseSchema } from "@/interfaces";
import { PopularMovie } from "@/interfaces/responseSchema/popularMovie";
import { PopularTv } from "@/interfaces/responseSchema/popularTv";
import { TopRateMovie } from "@/interfaces/responseSchema/topRateMovie";
import { TopRateTv } from "@/interfaces/responseSchema/topRateTv";
import { TrendingMovie } from "@/interfaces/responseSchema/trendingMovie";
import { UpComingMovie } from "@/interfaces/responseSchema/upComingMovie";
import { Grid, Container as MuiContainer, Typography } from "@mui/material";
import { get } from "lodash";
import { useMemo } from "react";

export type HomePageProps = IPage<
  [
    responseSchema<PopularMovie>,
    responseSchema<PopularTv>,
    responseSchema<TrendingMovie>,
    responseSchema<TopRateMovie>,
    responseSchema<TopRateTv>,
    responseSchema<UpComingMovie>
  ]
>;

const Home = (props: HomePageProps) => {
  const { initData } = props;

  const resPopularMovie = get(initData[0], "results");
  const resPopularTv = get(initData[1], "results");
  const resTrendingMovie = get(initData[2], "results");
  const resTopRateTv = get(initData[3], "results");
  const resTopRateMovie = get(initData[4], "results");
  const resUpcoming = get(initData[5], "results");

  console.log(resTrendingMovie);

  const renderTrendingMovie = useMemo(() => {
    if (typeof resTrendingMovie == "undefined") return null;

    return resTrendingMovie.map((data: TrendingMovie, idx: number) => (
      <TopTrendingCarditem key={data.id} data={data} idx={idx + 1} />
    ));
  }, [resTrendingMovie]);

  return (
    <MuiContainer>
      <Typography
        variant={"h3"}
        marginLeft={"9.6px"}
        marginBottom={"6px"}
        marginTop={"24px"}
      >
        Trending
      </Typography>
      <SlickSlider
        variant="multiple"
        props={{
          slidesToShow: 5,
          slidesToScroll: 1,

          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        }}
      >
        {renderTrendingMovie}
      </SlickSlider>
    </MuiContainer>
  );
};

export default Home;
