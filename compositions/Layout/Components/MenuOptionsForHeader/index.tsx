import { Fragment, MouseEvent, ReactNode, useState } from "react";
import { Button, Stack, StackProps, Typography, styled, useTheme } from "@mui/material";

import { ClockIcon, GlobeIcon, UserIcon, DownloadIcon } from "@/components";
import { useToggle } from "@/hooks";
import {
  MenuForHistory,
  MenuForMe,
  MenuForLanguage,
  SearchForHeader,
} from "@/compositions";

interface optionsCompProps extends StackProps {
  icon: ReactNode;
  title: string;
}

const MenuOptionsForHeader = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {
    on: handleIsOpenMenuForHistory,
    toggleOff: handleCloseMenuForHistory,
    toggleOn: handleOpenMenuForHistory,
  } = useToggle();

  const {
    on: handleIsOpenMenuForLanguage,
    toggleOff: handleCloseMenuForLanguage,
    toggleOn: handleOpenMenuForLanguage,
  } = useToggle();

  const {
    on: handleIsOpenMenuForAccount,
    toggleOff: handleCloseMenuForAccount,
    toggleOn: handleOpenMenuForAccount,
  } = useToggle();

  const handleClick = (event: MouseEvent<HTMLElement>, handleOpenMenu: () => void) => {
    setAnchorEl(event.currentTarget);
    handleOpenMenu();
  };
  const handleClose = () => {
    setAnchorEl(null);
    handleCloseMenuForHistory();
    handleCloseMenuForLanguage();
    handleCloseMenuForAccount();
  };

  return (
    <Fragment>
      <StyledWrapper>
        <SearchForHeader />
        <StyledOptionsBlock>
          <OptionsComp
            icon={<ClockIcon />}
            title="History"
            onClick={(event) => handleClick.call(this, event, handleOpenMenuForHistory)}
          />
          <OptionsComp
            icon={<GlobeIcon />}
            title="Language"
            onClick={(event) => handleClick.call(this, event, handleOpenMenuForLanguage)}
          />
          <OptionsComp
            icon={<UserIcon />}
            title="Me"
            onClick={(event) => handleClick.call(this, event, handleOpenMenuForAccount)}
          />
        </StyledOptionsBlock>
        <Button
          variant="contained"
          sx={{ backgroundColor: "rgb(28, 199, 73)" }}
          startIcon={<DownloadIcon />}
        >
          <Typography variant={"body2"} color={theme.palette.common.white}>
            APP
          </Typography>
        </Button>
      </StyledWrapper>

      {/* menu option */}

      <MenuForHistory
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForHistory}
        handleClose={handleClose}
      />
      <MenuForLanguage
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForLanguage}
        handleClose={handleClose}
      />
      <MenuForMe
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForAccount}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

const OptionsComp = (props: optionsCompProps) => {
  const { icon, title } = props;
  const theme = useTheme();
  return (
    <StyledOption sx={{ color: "white" }} {...props}>
      {icon}
      <Typography variant="subtitle2" color={theme.palette.common.white}>
        {title}
      </Typography>
    </StyledOption>
  );
};

const StyledWrapper = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,

    [theme.breakpoints.down("md")]: {
      gap: 12,
    },
  };
});

const StyledOption = styled(Stack)(() => {
  return {
    alignItems: "center",
    gap: "4px",
    cursor: "pointer",

    "&:hover svg, &:hover h6": {
      color: "rgb(28, 199, 73)",
      transition: "color linear 0.2s",
    },
  };
});

const StyledOptionsBlock = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  };
});

export default MenuOptionsForHeader;
