import { memo } from "react";
import { Box, Button, Stack, Typography, styled } from "@mui/material";

import { ArrowRightIcon, Image } from "@/components/common";
import { useToggle } from "@/hooks";
import usePoster from "@/hooks/usePoster";
import { ArtistDetailProps } from "@/interfaces/responseSchema/Artist";

interface IntroArtistProps {
  data: ArtistDetailProps;
}

const IntroArtist = ({ data }: IntroArtistProps) => {
  const {
    name,
    known_for_department,
    birthday,
    place_of_birth,
    biography,
    profile_path,
  } = data;

  const { on: isShowMore, toggle: toggleShowMore } = useToggle();

  const poster = usePoster(profile_path);

  return (
    <Container isShowMore={isShowMore}>
      <Box className={"image-wrapper"}>
        <Image src={poster} />
      </Box>

      <Stack className={"intro-content"}>
        <Typography variant={"h1"} className={"intro-name"}>
          {name}
        </Typography>

        <Typography variant={"subtitle6"} className={"intro-job"}>
          {known_for_department}
        </Typography>

        <Typography variant={"body1"} className={"intro-birthday"}>
          Ngày sinh: {birthday}
        </Typography>

        <Typography variant={"body1"} className={"intro-place-birthday"}>
          Nơi sinh: {place_of_birth}
        </Typography>

        <Typography variant={"body1"} className={"artist-description"}>
          {biography}
        </Typography>

        <Button
          variant="text"
          className={"btn-show-more"}
          startIcon={<ArrowRightIcon className={"arrow-icon"} />}
          onClick={toggleShowMore}
          disableRipple
        >
          <Typography variant={"body2"}>{isShowMore ? "Thu gọn" : "Xem thêm"}</Typography>
        </Button>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack, {
  shouldForwardProp: (propName) => propName !== "isShowMore",
})<{ isShowMore: boolean }>(({ isShowMore, theme }) => {
  return {
    flexDirection: "row",
    gap: 36,

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },

    ["& .image-wrapper"]: {
      position: "relative",
      width: 146,
      height: 146,
      flexShrink: 0,

      [theme.breakpoints.down("md")]: {
        width: 130,
        height: 130,
        margin: "0 auto",
      },

      ["& img"]: {
        objectFit: "cover",
        borderRadius: "50%",
      },
    },

    ["& .intro-content"]: {
      gap: 10,
      color: theme.palette.text_color.main,

      ["& .intro-name"]: {
        fontWeight: 500,
        lineHeight: "26px",
        fontSize: 32,

        [theme.breakpoints.down("md")]: {
          fontSize: "26px",
          margin: "0 auto",
        },
      },

      ["& .intro-job"]: {
        color: theme.palette.mode == "light" ? "#ccc" : "#FFFFFF80",
        fontWeight: 500,
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
          margin: "0 auto",
        },
      },

      ["& :where(.intro-birthday, .intro-place-birthday, .artist-description)"]: {
        lineHeight: "20px",

        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
        },
      },

      ["& .artist-description"]: {
        display: "-webkit-box",
        WebkitLineClamp: isShowMore ? "unset" : 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",

        transition: "all linear 0.2s",
      },

      ["& .btn-show-more"]: {
        color: theme.palette.common.black,

        ["& .arrow-icon"]: {
          color: theme.palette.common.black,
          transform: `rotate(${isShowMore ? "270deg" : "90deg"})`,
          transition: "transform linear 0.2s",
        },
      },
    },
  };
});

export default memo(IntroArtist);
