import { Box, Button, Stack, Typography, styled } from "@mui/material";

import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";
import Image from "@/components/Image";

const loader = ({ src }: any) => {
  return src;
};

const HeadingCastCardItem = () => {
  return (
    <Container>
      <StyledImageWrapper>
        <Image
          loader={loader}
          src={
            "https://pic4.iqiyipic.com/image/20230201/b3/ab/p_5318277_m_601_300_300.jpg"
          }
        />
      </StyledImageWrapper>

      <StyledContentWrapper>
        <Typography variant="body1" className="artist-name">
          Han Gao
        </Typography>

        <Stack className="content-bottom-wrapper">
          <Typography variant={"h6"} className="title">
            Director
          </Typography>

          <Button
            variant={"text"}
            endIcon={<ArrowRightIcon />}
            color="inherit"
            disableRipple
            disableTouchRipple
            disableFocusRipple
          >
            <Typography variant={"h6"} className="button-title">
              More
            </Typography>
          </Button>
        </Stack>
      </StyledContentWrapper>
    </Container>
  );
};

const Container = styled(Stack)(() => {
  return {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 12,
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    position: "relative",

    width: "100%",
    maxWidth: "80px",
    height: 80,
    borderRadius: "50%",
    overflow: "hidden",
    aspectRatio: "1/1",
  };
});

const StyledContentWrapper = styled(Box)(() => {
  return {
    padding: "10px 0 10px 10px",
    width: "100%",

    ["& .content-bottom-wrapper"]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "16px",
    },

    ["& button"]: {
      color: "rgb(0, 204, 54)",
      textTransform: "capitalize",

      ["&-title"]: {
        margin: "0px 4px 0px 0px",
      },

      ["& svg"]: {
        width: 14,
        height: 14,
      },
    },
  };
});

export default HeadingCastCardItem;
