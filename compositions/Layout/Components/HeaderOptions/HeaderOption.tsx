import { Box, Button, Grid, Typography, styled } from "@mui/material";

import { ClockIcon, DownloadIcon, GlobeIcon, UserIcon, Overlay } from "@/components";
import { useToggle } from "@/hooks";
import AccountPoperItem from "./AccountPoperItem";
import HistoryPoperItem from "./HistoryPoperItem";
import LanguagePoperItem from "./LanguagePoperItem";

const HeaderOption = () => {
  const {
    on: isOpenOverlay,
    toggleOff: hanleCloseOvelay,
    toggleOn: handleOpenOverlay,
  } = useToggle();

  const handleOpenPoper = (e: any) => {
    if (e.target.parentElement) {
      const poperElement = e.target.parentElement.querySelector(".poper-wrapper");

      if (poperElement) {
        poperElement.classList.add("active");
        handleOpenOverlay();
      }
    }
  };

  const handleClosePoper = () => {
    document.querySelector(".poper-wrapper.active")?.classList.remove("active");
    hanleCloseOvelay();
  };

  return (
    <Container>
      <Overlay className={isOpenOverlay ? "active" : ""} onClick={handleClosePoper} />

      <Grid container>
        <Grid item lg={3} md={3} sm={0} xs={0}>
          <Box className={"option-wrapper"} onClick={handleOpenPoper}>
            <ClockIcon className="icon" />
            <Typography variant="subtitle2" className="title">
              History
            </Typography>
            <HistoryPoperItem />
          </Box>
        </Grid>

        <Grid item lg={3} md={3} sm={0} xs={0}>
          <Box className={"option-wrapper"} onClick={handleOpenPoper}>
            <GlobeIcon className="icon" />
            <Typography variant="subtitle2" className="title">
              Language
            </Typography>
            <LanguagePoperItem />
          </Box>
        </Grid>

        <Grid item lg={3} md={3} sm={0} xs={0}>
          <Box className={"option-wrapper"} onClick={handleOpenPoper}>
            <UserIcon className="icon" />
            <Typography variant="subtitle2" className="title">
              Account
            </Typography>
            <AccountPoperItem />
          </Box>
        </Grid>

        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Button
            variant={"contained"}
            startIcon={<DownloadIcon />}
            className="btn-download"
          >
            <Typography variant={"body2"}>app</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    ["& .option-wrapper"]: {
      position: "relative",
      cursor: "pointer",

      ["&:hover > :where(.icon, .title)"]: {
        color: "rgb(28, 199, 73)",
      },

      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    ["& .btn-download"]: {
      backgroundColor: "rgb(28, 199, 73)",
      padding: "10px 16px",

      ["&:hover"]: {
        backgroundColor: "rgb(28, 199, 73)",
      },
    },
  };
});

export default HeaderOption;
