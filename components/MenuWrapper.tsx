import { ReactNode } from "react";
import { Menu as MuiMenu, MenuProps, Box, styled } from "@mui/material";

interface menuProps extends MenuProps {
  children: ReactNode;
}

const Menu = (props: menuProps) => {
  const { children } = props;

  return (
    <MuiMenu
      id="positioned-menu"
      aria-labelledby="positioned-button"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      MenuListProps={{ disablePadding: true }}
      {...props}
    >
      <StyledBox>{children}</StyledBox>
    </MuiMenu>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    color: theme.palette.common.white,
    padding: "8px 0",
    minWidth: 282,

    backgroundColor: "#1A1C22",

    "& li": {
      justifyContent: "center",
      width: "100%",
    },

    "& li:hover": {
      // background: "rgba(255, 255, 255, 0.08)",
      color: "rgb(28, 199, 73)",
    },
  };
});

export default Menu;
