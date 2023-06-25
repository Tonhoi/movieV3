import { Box, Button, Divider, Grid, Stack, Typography, styled } from "@mui/material";

import CardItem from "../CardItem";
import usePoster from "@/hooks/usePoster";
import Image from "@/components/Image";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";

interface CastCardItemProps {
  data: any;
}

const CastCardItem = ({ data }: CastCardItemProps) => {
  const { profile_path, name, known_for_department } = data;

  const profilePath = usePoster(profile_path);

  return (
    <Container>
      {/* <HeadingCastCardItem profile_path={profile_path} /> */}

      <StyledHeadingWrapper>
        <StyledImageWrapper>
          <Image
            src={profilePath}
            alt=""
            style={{
              objectFit: "cover",
            }}
          />
        </StyledImageWrapper>

        <StyledContentWrapper>
          <Typography variant="body1" className="artist-name">
            {name}
          </Typography>

          <Stack className="content-bottom-wrapper">
            <Typography variant={"h6"} className="title">
              {known_for_department}
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
      </StyledHeadingWrapper>

      <Divider light className="divider" />

      <Grid container spacing={1}>
        <Grid item lg={6} md={6} xs={6}>
          {/* <CardItem animation /> */}
        </Grid>
        <Grid item lg={6} md={6} xs={6}>
          {/* <CardItem /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

const StyledHeadingWrapper = styled(Stack)(() => {
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

const Container = styled(Box)(({ theme }) => {
  return {
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: 12,
    borderRadius: "4px",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),

    ["& .divider"]: {
      backgroundColor: "#2D2F34",
      height: 2,

      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  };
});

export default CastCardItem;
