import { Box, Divider, Stack, Typography, styled, useTheme } from "@mui/material";

import {
  PlayIcon,
  SaveIcon,
  StarIcon,
  ArrowRightIcon,
  Link,
  CardItemBase,
} from "@/components";

const DetailCardItem = () => {
  const theme = useTheme();

  return (
    <Container>
      <CardItemBase>
        <StyledCardImage className="card-image" position={"relative"}>
          <Stack className={"card-image-icon"}>
            <PlayIcon />
            <SaveIcon />
          </Stack>
        </StyledCardImage>
      </CardItemBase>

      <StyledCardContent className="card-content">
        <Typography variant={"subtitle1"} className="card-title">
          Our Secrets
        </Typography>

        <Stack className="card-body">
          <StarIcon style={{ width: 12, height: 12 }} />
          <Typography variant="body2" color={theme.palette.text_hover.main}>
            9.7
          </Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">2017</Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">C13</Typography>
          <Divider orientation="vertical" light />

          <Typography variant="h6">24 Episodes</Typography>
        </Stack>

        <StyledGenreMovie variant="h6">Chinese Mainland</StyledGenreMovie>

        <Typography variant="h6" className="card-description">
          "Our Secret" (2021) - A story of a talented campus beau, Zhou Si Yue (Chen Zhe
          Yuan), and a determined Cinderella, Ding Xian (Xu Meng Jie), who accompany each
          other through the lows and lost of their youth and eventually become better
          selves. Zhou Si Yue is a handsome young man. He suffers from family changes but
          still firmly pursues what is in his heart. Ding Xian is a diligent and positive
          Little Sun. She explores what she loves. In the day-to-day campus life, the two
          accompanied each other through a low and lost period, and finally grew and
          changed together. This drama is adapted from the novel of the same name by Er
          Dong Tu Zi. The male actor, Chen Zhe Yuan, starred in "Renascence" and "The
          Legend Of Zu 2" which have aired on the iQIYI website.
        </Typography>

        <Link href={"/"}>
          <Stack className="card-btn">
            <Typography variant={"h6"}>more info</Typography>
            <ArrowRightIcon style={{ width: 14, height: 14 }} />
          </Stack>
        </Link>
      </StyledCardContent>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    borderRadius: "4px",
    overflow: "hidden",

    cursor: "pointer",
  };
});

const StyledCardImage = styled(Box)(() => {
  return {
    backgroundImage:
      "url(https://static2.vieon.vn/vieplay-image/carousel_web_v4/2022/05/24/g9mfrt9z_1920x1080-luananhhung6ebadcb417ca17c991478e11594f60a1.jpg)",
    aspectRatio: "284 / 159",

    ["& .card-image-icon"]: {
      position: "absolute",
      bottom: 8,
      right: 8,
      zIndex: 2,

      flexDirection: "row",
      alignItems: "center",
      gap: 8,

      ["& svg"]: {
        width: 32,
        height: 32,
        transform: "scale(1)",
        transition: "transform linear 0.2s",

        ["&:hover"]: {
          cursor: "pointer",
          transform: "scale(1.1)",
        },
      },
    },
  };
});

const StyledCardContent = styled(Stack)(({ theme }) => {
  return {
    background: theme.palette.secondary.main,
    padding: 8,
    gap: 6,

    color: theme.palette.common.white,

    ["& hr"]: {
      width: 2,
      height: 12,

      background: theme.palette.opacity.white_02,
    },

    ["& .card"]: {
      ["&-title"]: {
        ["&:hover"]: {
          color: theme.palette.text_hover.main,

          cursor: "pointer",
          transition: "color linear 0.2s",
        },
      },

      ["&-body"]: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,

        ["& svg"]: {
          width: 50,
          height: 50,

          cursor: "pointer",

          ["&:hover"]: { opacity: 0.8, transition: "opacity linear 0.3s" },
        },
      },

      ["&-description"]: {
        display: "-webkit-box",
        maxWidth: "100%",
        WebkitLineClamp: 5,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      },

      ["&-btn"]: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        textAlign: "right",
        marginTop: theme.spacing(1),
        marginBottom: 4,

        color: theme.palette.text_hover.main,
      },
    },
  };
});

const StyledGenreMovie = styled(Typography)(({ theme }) => {
  return {
    padding: "2px 4px",
    width: "fit-content",

    background: theme.palette.opacity.white_008,
    borderRadius: "2px",
  };
});

export default DetailCardItem;
