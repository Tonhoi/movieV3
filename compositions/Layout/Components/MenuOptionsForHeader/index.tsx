import { Fragment, MouseEvent, ReactNode, useState } from "react";
import { Button, Stack, StackProps, Typography, styled, useTheme } from "@mui/material";

import { ClockIcon, GlobeIcon, UserIcon, DownloadIcon } from "@/components";
import {
  MenuForHistory,
  MenuForMe,
  MenuForLanguage,
  SearchForHeader,
} from "@/compositions";
import { useToggle } from "@/hooks";

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

  return (
    <Fragment>
      <StyledWrapper>
        <SearchForHeader />

        <StyledOptionsBlock>
          <OptionsComp
            icon={<ClockIcon />}
            title="History"
            onClick={(event) => handleClick(event, handleOpenMenuForHistory)}
          />

          <OptionsComp
            icon={<GlobeIcon />}
            title="Language"
            onClick={(event) => handleClick(event, handleOpenMenuForLanguage)}
          />

          <OptionsComp
            icon={<UserIcon />}
            title="Me"
            onClick={(event) => handleClick(event, handleOpenMenuForAccount)}
          />
        </StyledOptionsBlock>

        <StyledButton variant="contained" startIcon={<DownloadIcon />}>
          <Typography variant={"body2"} color={theme.palette.common.white}>
            APP
          </Typography>
        </StyledButton>
      </StyledWrapper>

      {/* menu option */}

      <MenuForHistory
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForHistory}
        handleClose={handleCloseMenuForHistory}
      />
      <MenuForLanguage
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForLanguage}
        handleClose={handleCloseMenuForLanguage}
      />
      <MenuForMe
        anchorEl={anchorEl}
        openMenuOfLanguage={handleIsOpenMenuForAccount}
        handleClose={handleCloseMenuForAccount}
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

const StyledButton = styled(Button)(() => {
  return {
    backgroundColor: "rgb(28, 199, 73)",

    ":hover": {
      backgroundColor: "rgb(28, 199, 73)",
      opacity: "0.8",
      transition: "opacity linear 0.3s",
    },
  };
});

export default MenuOptionsForHeader;
