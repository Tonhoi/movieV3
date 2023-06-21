import { Dispatch, SetStateAction } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";

import { PlayIcon, SaveIcon } from "@/components";
import SlickSlider from "@/compositions/Slick/SlickSlider";
import InfoMovie from "@/components/InfoMovie";
import CardItem3 from "@/components/Card/CardItem3";

interface ContentSliderHeaderprops {
  slider1: any;
  setSlider2: SetStateAction<Dispatch<SetStateAction<null>>>;
}

const ContentSliderHeader = (props: ContentSliderHeaderprops) => {
  const { slider1, setSlider2 } = props;

  return (
    <StyledWrapper>
      <Box position={"relative"} width={"100%"}>
        <SlickSlider
          variant="multiple"
          asNavFor={slider1}
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
    // marginTop: theme.spacing(10),
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

export default ContentSliderHeader;
