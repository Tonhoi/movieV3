import { Box, Button, Stack, Typography, styled } from "@mui/material";

import { ArrowRightIcon, Image } from "@/components";
import ShareIconV2 from "@/components/Icons/ShareIconV2";
import { useToggle } from "@/hooks";
import usePoster from "@/hooks/usePoster";
import { PEOPLEDETAILSCHEMA } from "@/interfaces/responseSchema/peopleDetail";

interface IntroArtistProps {
  // data: PEOPLEDETAILSCHEMA;
  data: any;
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

  const { on, toggle } = useToggle();

  const poster = usePoster(profile_path);

  return (
    <Container on={on}>
      <Box className={"image-wrapper"}>
        <Image src={poster} />
      </Box>

      <Stack className={"actor-heading-content"}>
        <Typography variant={"h4"} className={"actor-name"}>
          {name}
        </Typography>

        <Typography variant={"subtitle6"} className={"actor-job"}>
          {known_for_department}
        </Typography>

        <Typography variant={"body1"} className={"actor-birthday"}>
          Ngày sinh: {birthday}
        </Typography>

        <Typography variant={"body1"} className={"actor-place-birthday"}>
          Nơi sinh: {place_of_birth}
        </Typography>

        <Typography variant={"body1"} className={"actor-description"}>
          {biography}
        </Typography>

        <Button
          variant="text"
          className={"see-more-btn"}
          startIcon={<ArrowRightIcon className={"arrow-icon"} />}
          onClick={toggle}
        >
          <Typography variant={"body2"} color={"#fff"}>
            {on ? "Thu gọn" : "Xem thêm"}
          </Typography>
        </Button>

        <Button
          variant={"contained"}
          className={"share-btn"}
          startIcon={<ShareIconV2 className="share-icon" />}
        >
          <Typography>Chia sẻ</Typography>
        </Button>
      </Stack>
    </Container>
  );
};

const Container = styled(Stack, {
  shouldForwardProp: (propName) => propName !== "on",
})<{ on: boolean }>(({ on, theme }) => {
  return {
    flexDirection: "row",
    gap: 36,

    ["& .image-wrapper"]: {
      position: "relative",
      width: 146,
      height: 146,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,

      [theme.breakpoints.down("md")]: {
        width: 130,
        height: 130,
      },

      ["& img"]: {
        objectFit: "cover",
      },
    },

    ["& .actor-heading-content"]: {
      gap: 10,
      ["& .actor-name"]: {
        fontWeight: 500,
        lineHeight: "26px",
        [theme.breakpoints.down("md")]: {
          fontSize: "26px",
        },
      },

      ["& .actor-job"]: {
        color: "#FFFFFF80",
        fontWeight: 500,
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
      },

      ["& :where(.actor-birthday, .actor-place-birthday, .actor-description)"]: {
        lineHeight: "20px",

        [theme.breakpoints.down("md")]: {
          fontSize: "14px",
        },
      },

      ["& .actor-description"]: {
        display: "-webkit-box",
        WebkitLineClamp: on ? "unset" : 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",

        transition: "all linear 0.2s",
      },

      ["& .see-more-btn"]: {
        ["& .arrow-icon"]: {
          color: theme.palette.common.white,
          transform: `rotate(${on ? "270deg" : "90deg"})`,
          transition: "transform linear 0.2s",
        },
      },

      ["& .share-btn"]: {
        backgroundColor: "#23252B",
        padding: "10px 16px",
        width: "fit-content",
        textTransform: "inherit",
        marginTop: 14,

        [theme.breakpoints.down("md")]: {
          padding: "6px 16px",
        },

        ["& .share-icon"]: {
          width: 15,
          height: 24,
        },
      },
    },
  };
});

export default IntroArtist;
