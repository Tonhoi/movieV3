import { Fragment, MouseEvent, MouseEventHandler, ReactNode, useState } from "react";
import {
  Box,
  Button,
  Stack,
  StackProps,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

import { ClockIcon, GlobeIcon, UserIcon, DownloadIcon, Menu, Image } from "@/components";
import { SearchForHeader } from "@/compositions";

import { useToggle } from "@/hooks";
import { MenuForHistory, MenuForMe, MenuForLanguage } from "@/compositions";

const MenuOptionsForHeader = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const openMenuOfLanguage = Boolean(anchorElForHistory);

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

      {/* <Menu /> */}

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

interface optionsCompProps extends StackProps {
  icon: ReactNode;
  title: string;
}

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
