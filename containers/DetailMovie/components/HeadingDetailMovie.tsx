import { styled, Box, Typography, Stack, Button } from "@mui/material";

import { Image, Overlay, TvIcon, PlayV2Icon, SaveV2Icon } from "@/components";

const loader = ({ src }: any) => {
  return src;
};

const HeadingDetailMovie = () => {
  return (
    <Container className={"thumbnail"}>
      <Overlay className={"overlay active"} />

      <StyledContent className={"content"}>
        <Box className={"poster"}>
          <Image
            loader={loader}
            src={"https://image.tmdb.org/t/p/w500/sv9rRFekgw3sz0Ce7pkFqwThAf0.jpg"}
            style={{
              objectFit: "cover",
            }}
          />
        </Box>

        <Stack gap={"20px"}>
          <Typography className={"title"} variant={"subtitle5"}>
            Quái vật đen
          </Typography>

          <Typography className={"description"} variant={"body1"}>
            Quái Vật Đen xoay quanh câu chuyện khi kỳ nghỉ bình dị của gia đình Oilman
            Paul Sturges biến thành cơn ác mộng. Bởi họ đã gặp phải một con cá mập
            Megalodon hung dữ, không từ bất kỳ khoảnh khắc nào để bảo vệ lãnh thổ của
            mình. Bị mắc kẹt và tấn công liên tục, Paul và gia đình của mình phải tìm cách
            để an toàn sống sót trở về bờ trước khi con cá mập khát máu này tấn công lần
            nữa.
          </Typography>

          <Stack className="artist-list">
            Cast:
            <Typography variant={"body1"} className="artist">
              Omar Patin
            </Typography>
          </Stack>

          <Stack className={"genre-list"}>
            <Typography variant={"body1"} className="genre">
              Phim Kinh Dị
            </Typography>
          </Stack>

          <Box className={"btn-wrapper"}>
            <Button
              variant={"contained"}
              className="btn btn-play"
              startIcon={<PlayV2Icon />}
            >
              <Typography variant={"h5"}>Play</Typography>
            </Button>
            <Button
              variant={"contained"}
              className="btn btn-trailer"
              startIcon={<TvIcon />}
            >
              <Typography variant={"h5"}>Watch Trailer</Typography>
            </Button>

            <Button variant={"contained"} className={"btn"} startIcon={<SaveV2Icon />}>
              <Typography variant={"h5"}>Watch Later</Typography>
            </Button>
          </Box>
        </Stack>
      </StyledContent>
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    position: "relative",
    width: "100%",
    maxHeight: "100vh",
    aspectRatio: "1 / 1",

    backgroundImage:
      "url(https://image.tmdb.org/t/p/original//9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

    ["& .overlay"]: {
      position: "absolute",
      background: "linear-gradient(rgba(52,73,94,.255),#333 90%)",
      zIndex: 1,
    },
  };
});

const StyledContent = styled(Stack)(({ theme }) => {
  return {
    position: "absolute",
    bottom: 50,
    left: "50%",
    zIndex: 2,
    width: "100%",
    maxWidth: 1200,
    flexDirection: "row",
    padding: "0px 24px",
    gap: 30,
    transform: "translateX(-50%)",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      bottom: 0,
      flexDirection: "column",
      alignItems: "center",
      padding: "120px 24px 50px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "120px 16px 50px",
    },

    ["& .poster"]: {
      position: "relative",
      width: "100%",
      minWidth: 300,
      maxWidth: 300,
      height: 450,
      borderRadius: "10px",
      overflow: "hidden",

      [theme.breakpoints.down("sm")]: {
        minWidth: "unset",
      },
    },

    ["& .description"]: {
      lineHeight: 1.6,
    },

    ["& :is(.artist-list, .genre-list)"]: {
      flexDirection: "row",
      flexWrap: "wrap",
      columnGap: theme.spacing(2),
      rowGap: 4,
      width: "fit-content",

      ["& .genre"]: {
        cursor: "pointer",
        padding: "6px 16px",
        border: "1px solid #fff",
        borderRadius: "50px",
        width: "fit-content",

        ["&:hover"]: {
          borderColor: "rgb(0, 194, 52)",
          color: "rgb(0, 194, 52)",
          transition: "all linear 0.2s",
        },
      },

      ["& .artist"]: {
        cursor: "pointer",
        width: "fit-content",

        ["&:hover"]: {
          textDecoration: "underline",
          color: "rgb(0, 194, 52)",
          transition: "color linear 0.2s",
        },
      },
    },

    ["& .btn"]: {
      padding: "8px 16px",
      width: "fit-content",
      marginRight: 10,
      marginBottom: 10,
      textTransform: "capitalize",
      backgroundColor: "#34495E",

      ["& svg"]: {
        width: 24,
        height: 24,
      },

      ["&.btn-play"]: {
        backgroundColor: "rgb(28, 199, 73)",
      },
    },
  };
});

export default HeadingDetailMovie;
