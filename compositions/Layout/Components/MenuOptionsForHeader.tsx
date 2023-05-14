import { Fragment, MouseEvent, MouseEventHandler, useState } from "react";
import { Button, Stack, StackProps, Typography, styled, useTheme } from "@mui/material";

import { ClockIcon, GlobeIcon, UserIcon, DownloadIcon, Menu, Image } from "@/components";
import { SearchForHeader } from "@/compositions";

import MenuForHistory from "./Menu/MenuForHistory";
import MenuForMe from "./Menu/MenuForMe";
import { useToggle } from "@/hooks";
import MenuForLanguage from "./Menu/MenuForLanguage";

const MenuOptionsForHeader = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // const openMenuOfLanguage = Boolean(anchorElForHistory);

  const {
    toggle: handleToggleMenuForHistory,
    on: handleIsOpenMenuForHistory,
    toggleOff: handleCloseMenuForHistory,
    toggleOn: handleOpenMenuForHistory,
  } = useToggle();

  const {
    toggle: handleToggleMenuForLanguage,
    on: handleIsOpenMenuForLanguage,
    toggleOff: handleCloseMenuForLanguage,
    toggleOn: handleOpenMenuForLanguage,
  } = useToggle();

  const {
    toggle: handleToggleMenuForAccount,
    on: handleIsOpenMenuForAccount,
    toggleOff: handleCloseMenuForAccount,
    toggleOn: handleOpenMenuForAccount,
  } = useToggle();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    // toggleOn();
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
            Icon={ClockIcon}
            title="History"
            onClick={(event) =>
              handleClick.bind(this, handleClick(event), handleOpenMenuForHistory())
            }
          />
          <OptionsComp
            Icon={GlobeIcon}
            title="Language"
            onClick={(event) => handleClick.bind(this, handleOpenMenuForLanguage())}
          />
          <OptionsComp
            Icon={UserIcon}
            title="Me"
            onClick={(event) => handleClick.bind(this, handleOpenMenuForAccount())}
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
  Icon: any;
  title: string;
}

const OptionsComp = (props: optionsCompProps) => {
  const { Icon, title } = props;
  const theme = useTheme();
  return (
    <StyledOption {...props}>
      <Icon sx={{ color: theme.palette.common.white }} />
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
