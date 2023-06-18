import { Dispatch, SetStateAction } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { PlayIcon, SaveIcon } from "@/components";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import InfoMovie from "@/components/InfoMovie";
import CardItem3 from "@/components/Card/CardItem3";

interface ContentSliderHeaderprops {
  slider1: any;
  slider3: any;
  setSlider2: SetStateAction<Dispatch<SetStateAction<null>>>;
  setSlider3: SetStateAction<Dispatch<SetStateAction<null>>>;
}

const ContentSliderHeader = (props: ContentSliderHeaderprops) => {
  const { slider1, slider3, setSlider2, setSlider3 } = props;

  return (
    <StyledWrapper>
      <SlickSlider
        props={{
          fade: true,
        }}
        variant="simple"
        asNavFor={slider1}
        refSlick={(
          slider: ((prevState: null) => null) & Dispatch<SetStateAction<null>>
        ) => setSlider3(slider)}
      >
        {Array(5)
          .fill(null)
          .map((el, idx) => (
            <Stack spacing={2} maxWidth={"50%"} key={idx}>
              <Typography variant="h2">Luận anh hùng</Typography>

              <StyledSection>
                <Typography variant="subtitle3">TOP 1</Typography>
                <Typography variant="subtitle3" padding={"0 6px 0"}>
                  High Popularity
                </Typography>
              </StyledSection>

              <InfoMovie />

              <StyledContentWrapper>
                <PlayIcon className="icon play-icon" />

                <SaveIcon className="icon save-icon" />
              </StyledContentWrapper>
            </Stack>
          ))}
      </SlickSlider>

      <Box position={"relative"} width={"100%"}>
        <SlickSlider
          variant="multiple"
          asNavFor={slider1 && slider3}
          refSlick={(
            slider: ((prevState: null) => null) & Dispatch<SetStateAction<null>>
          ) => setSlider2(slider)}
        >
          {Array(5)
            .fill(null)
            .map((el, idx) => (
              <CardItem3 key={idx} />
            ))}
        </SlickSlider>
      </Box>
    </StyledWrapper>
  );
};

const StyledWrapper = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    marginTop: theme.spacing(10),
    zIndex: 4,

    color: "#ECECEC",

    [theme.breakpoints.down("md")]: {
      marginTop: 0,

      ["& .mui-style-z0me0w"]: {
        display: "none",
      },
    },
  };
});

const StyledContentWrapper = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",

    "& svg": {
      width: 50,
      height: 50,

      cursor: "pointer",

      ":hover": { opacity: 0.8, transition: "opacity linear 0.3s" },
    },
  };
});

const StyledSection = styled(Stack)(({ theme }) => {
  return {
    width: "fit-content",
    flexDirection: "row",
    alignItems: "center",
    gap: "2px",

    borderRadius: "2px",
    overflow: "hidden",
    background: theme.palette.opacity.white_02,

    ["& span:first-of-type"]: {
      padding: "2px 6px",

      backgroundImage: "linear-gradient(90deg, rgb(0, 214, 57) 0%, rgb(0, 194, 52) 100%)",
    },
  };
});

export default ContentSliderHeader;
