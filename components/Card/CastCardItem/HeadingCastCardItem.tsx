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
        <Typography variant="body1">Han Gao</Typography>

        <Stack>
          <Typography variant={"h6"}>Director</Typography>

          <Button
            variant={"text"}
            endIcon={<ArrowRightIcon />}
            color="inherit"
            disableRipple
            disableTouchRipple
            disableFocusRipple
          >
            <Typography variant={"h6"} marginRight={"4px"}>
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

    marginBottom: 12,
  };
});

const StyledImageWrapper = styled(Box)(() => {
  return {
    position: "relative",

    width: "100%",
    maxWidth: "80px",
    borderRadius: "50%",
    overflow: "hidden",
    aspectRatio: "1/1",
  };
});

const StyledContentWrapper = styled(Box)(() => {
  return {
    padding: "10px 0 10px 10px",
    width: "100%",

    ["& > div"]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "16px",
    },

    ["& button"]: {
      color: "rgb(0, 204, 54)",
      textTransform: "capitalize",

      ["& span"]: {
        margin: 0,
      },

      ["& svg"]: {
        width: 14,
        height: 14,
      },
    },
  };
});

export default HeadingCastCardItem;
