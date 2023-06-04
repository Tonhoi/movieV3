import { Box, Typography, useTheme, styled } from "@mui/material";

import cardDemo from "@/public/image/card_image_demo.webp";

const CardItem = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box position={"relative"}>
        <Typography variant="h6">24 Episodes</Typography>
      </Box>

      <Typography variant={"subtitle1"} marginTop={theme.spacing(1)} className="title">
        Our Secrets
      </Typography>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    position: "relative",
    cursor: "pointer",
    maxWidth: "190px",

    ["&:hover"]: {
      ["& .title"]: {
        color: "red",
      },
    },

    ["& div"]: {
      position: "relative",

      backgroundImage: `url(${cardDemo.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      paddingTop: "56%",

      borderRadius: "4px",
      overflow: "hidden",

      ["& h6"]: {
        position: "absolute",
        bottom: 10,
        left: 8,
        zIndex: 2,

        color: theme.palette.common.white,
      },

      ["&:after"]: {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 1,

        width: "100%",
        height: "60px",
        backgroundImage:
          "linear-gradient(0deg, rgba(10, 12, 15, 0.8) 0%, rgba(10, 12, 15, 0.74) 4%, rgba(10, 12, 15, 0.59) 17%, rgba(10, 12, 15, 0.4) 34%, rgba(10, 12, 15, 0.21) 55%, rgba(10, 12, 15, 0.06) 78%, rgba(10, 12, 15, 0) 100%)",
      },
    },
  };
});

export default CardItem;
