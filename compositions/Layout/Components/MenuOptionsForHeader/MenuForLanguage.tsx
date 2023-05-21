import { MouseEventHandler } from "react";
import { MenuItem } from "@mui/material";

import { Menu } from "@/components";

interface menuForLanguageProps {
  anchorEl: null | HTMLElement;
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}

const MenuForLanguage = (props: menuForLanguageProps) => {
  const { anchorEl, handleClose, openMenuOfLanguage } = props;
  return (
    <Menu anchorEl={anchorEl} open={openMenuOfLanguage} onClose={handleClose}>
      <MenuItem onClick={handleClose}>English</MenuItem>
      <MenuItem onClick={handleClose}>TIếng việt</MenuItem>
    </Menu>
  );
};

export default MenuForLanguage;
