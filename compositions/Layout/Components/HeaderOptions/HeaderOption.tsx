import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase-config";

import { DownloadIcon, GlobeIcon, UserIcon, Overlay, Image } from "@/components";
import { useToggle } from "@/hooks";
import AccountPoperItem from "./AccountPoperItem";
import HistoryPoperItem from "./HistoryPoperItem";
import LanguagePoperItem from "./LanguagePoperItem";

import avatar from "@/public/image/avatar.png";
import SunIcon from "@/components/Icons/SunIcon";
import MoonIcon from "@/components/Icons/MoonIcon";
import { ROUTES } from "@/routers";

const HeaderOption = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const {
    on: isOpenOverlay,
    toggleOff: hanleCloseOvelay,
    toggleOn: handleOpenOverlay,
  } = useToggle();

  const { on: isLightTheme, toggle: handleToggleTheme } = useToggle();

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

      <Stack className={"option-wrapper"}>
        <Stack className={"icon-wrapper"} onClick={handleToggleTheme}>
          {isLightTheme ? <SunIcon className="icon" /> : <MoonIcon className="icon" />}
        </Stack>

        <Stack className={"icon-wrapper"} onClick={handleOpenPoper}>
          <GlobeIcon className="icon" />
        </Stack>

        {!user && (
          <Stack className={"icon-wrapper"} onClick={() => router.push(ROUTES.login)}>
            <UserIcon className="icon" />
          </Stack>
        )}

        {user && (
          <Box className={"avatar-wrapper"} onClick={() => router.push("/personal")}>
            <Image src={avatar} style={{ objectFit: "contain" }} />
          </Box>
        )}

        <Button
          variant={"contained"}
          startIcon={<DownloadIcon />}
          className="btn-download"
        >
          <Typography variant={"body2"}>app</Typography>
        </Button>
      </Stack>
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
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },

    ["& .icon-wrapper"]: {
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      cursor: "pointer",
      padding: "12px",
      borderRadius: "50%",
      backgroundColor: "#444444",

      ["&:hover > :where(.icon, .title)"]: {
        color: "rgb(28, 199, 73)",
      },

      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },

    ["& .avatar-wrapper"]: {
      position: "relative",
      width: 48,
      height: 48,
      borderRadius: "50%",
      overflow: "hidden",
      cursor: "pointer",

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
