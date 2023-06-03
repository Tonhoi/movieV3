import { Fragment, useCallback, useState } from "react";
import { Button, Stack, Typography, styled } from "@mui/material";

import { ClockIcon, GlobeIcon, UserIcon, DownloadIcon } from "@/components";
import {
  MenuForHistory,
  MenuForMe,
  MenuForLanguage,
  SearchForHeader,
} from "@/compositions";
import { useToggle } from "@/hooks";
import Overlay from "@/components/Overlay";

const MenuOptionsForHeader = () => {
  const {
    on: isOpenMenuForHistory,
    toggleOff: handleCloseMenuForHistory,
    toggleOn: handleOpenMenuForHistory,
  } = useToggle();

  const {
    on: isOpenMenuForLanguage,
    toggleOff: handleCloseMenuForLanguage,
    toggleOn: handleOpenMenuForLanguage,
  } = useToggle();

  const {
    on: isOpenMenuForAccount,
    toggleOff: handleCloseMenuForAccount,
    toggleOn: handleOpenMenuForAccount,
  } = useToggle();

  const hanleClosePoper = useCallback(() => {
    handleCloseMenuForHistory();
    handleCloseMenuForLanguage();
    handleCloseMenuForAccount();
  }, []);

  return (
    <Fragment>
      <StyledWrapper>
        <SearchForHeader />
        <Overlay
          className={
            isOpenMenuForAccount || isOpenMenuForHistory || isOpenMenuForLanguage
              ? "active"
              : ""
          }
          onClick={hanleClosePoper}
        />

        <StyledOption onClick={handleOpenMenuForHistory}>
          <ClockIcon />
          <Typography variant="subtitle2">History</Typography>

          <MenuForHistory
            openMenuOfHistory={isOpenMenuForHistory}
            handleClose={handleCloseMenuForHistory}
          />
        </StyledOption>

        <StyledOption onClick={handleOpenMenuForLanguage}>
          <GlobeIcon />
          <Typography variant="subtitle2">Language</Typography>

          <MenuForLanguage
            openMenuOfLanguage={isOpenMenuForLanguage}
            handleClose={handleCloseMenuForLanguage}
          />
        </StyledOption>

        <StyledOption onClick={handleOpenMenuForAccount}>
          <UserIcon />

          <Typography variant="subtitle2">Me</Typography>

          <MenuForMe
            openMenuOfAccount={isOpenMenuForAccount}
            handleClose={handleCloseMenuForAccount}
          />
        </StyledOption>

        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          className="download-for-app"
        >
          <Typography variant={"body2"}>APP</Typography>
        </Button>
      </StyledWrapper>

      {/* menu option */}

      {/* <MenuForHistory
        anchorEl={anchorEl}
        openMenuOfLanguage={isOpenMenuForHistory}
        handleClose={handleCloseMenuForHistory}
      /> */}
    </Fragment>
  );
};

const StyledWrapper = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,

    ["& .download-for-app"]: {
      backgroundColor: "rgb(28, 199, 73)",

      ":hover": {
        backgroundColor: "rgb(28, 199, 73)",
        opacity: "0.8",
        transition: "opacity linear 0.3s",
      },
    },

    [theme.breakpoints.down("md")]: {
      gap: 12,
    },
  };
});

const StyledOption = styled(Stack)(({ theme }) => {
  return {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 0,
    gap: "4px",

    cursor: "pointer",
    color: theme.palette.common.white,

    minWidth: "unset",

    ["& > span"]: {
      margin: 0,
    },

    "&:hover": {
      ["& > svg, & > h6"]: {
        color: "rgb(28, 199, 73)",
        transition: "color linear 0.2s",
      },
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});

export default MenuOptionsForHeader;
