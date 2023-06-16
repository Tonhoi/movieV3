import { Box, Stack, Typography, styled } from "@mui/material";

import { PlayIcon } from "@/components";

const SubSlideHeader = () => {
  return (
    <Container>
      <StyledCardWrapper>
        <PlayIcon className="play-icon" />

        <Stack className="slider-content">
          <Typography variant={"subtitle1"}>Danh Sách Schindler</Typography>
          <Typography variant={"subtitle2"}>121.225 Viewer</Typography>
        </Stack>
      </StyledCardWrapper>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {};
});

const StyledCardWrapper = styled(Box)(() => {
  return {
    aspectRatio: "300 / 160",
    borderRadius: "12px",
    overflow: "hidden",

    backgroundImage: `url(https://pic3.iqiyipic.com/image/20230215/63/88/v_171232517_m_601_zh-CN_m2_480_270.webp)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

    cursor: "pointer",
    transform: "scale(1)",
    transition: "all linear 0.2s",

    ":hover": {
      transform: "scale(1.05)",
      filter: "contrast(0.9)",

      "& > .play-icon": {
        opacity: 1,
      },
    },

    ["& .play-icon"]: {
      position: "relative",
      left: 12,
      top: 6,

      width: 50,
      height: 70,

      opacity: 0,
      transition: "all linear 0.1s",
    },

    ["& .slider-content"]: {
      position: "absolute",
      left: 0,
      bottom: 0,

      width: "100%",
      padding: "30px 8px 15px",
      gap: "4px",

      backgroundImage:
        "linear-gradient(transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))",
    },
  };
});

export default SubSlideHeader;
