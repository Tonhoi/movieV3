import { CardItem } from "@/components";
import InfoMovie from "@/components/InfoMovie";
import ArrowLeft from "@/compositions/Slick/ArrowLeft";
import ArrowRight from "@/compositions/Slick/ArrowRight";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import { Box, Typography, styled } from "@mui/material";

const reponsiveSlider = [
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      arrows: true,
    },
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 3,
      arrows: true,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      arrows: true,
    },
  },
];

const ContentPlayMovie = () => {
  return (
    <Container>
      <Typography variant={"h3"} className={"title"}>
        Naruto
      </Typography>

      <Box className={"content"}>
        <InfoMovie />

        <Box className={"recommended-movie"}>
          <Typography variant={"h3"} className={"name"}>
            Recommended
          </Typography>

          <SlickSlider
            variant="multiple"
            props={{
              arrows: true,
              nextArrow: <ArrowRight />,
              prevArrow: <ArrowLeft />,
              slidesToShow: 5,
              slidesToScroll: 1,
              responsive: reponsiveSlider,
            }}
          >
            {Array(6)
              .fill(null)
              .map((el, idx: number) => (
                <CardItem animation key={idx} />
              ))}
          </SlickSlider>
        </Box>
      </Box>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    marginTop: 14,

    ["& .content"]: {
      marginTop: 14,

      ["& .recommended-movie"]: {
        marginTop: 40,
        marginBottom: 12,
        ["& .name"]: {
          marginBottom: 16,
        },

        ["& svg"]: {
          color: theme.palette.common.white,
        },
      },
    },
  };
});

export default ContentPlayMovie;
