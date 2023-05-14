import { Menu } from "@/components";
import { Box, Button, MenuItem, Stack, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface menuForLanguageProps {
  anchorEl: null | HTMLElement;
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}
const MenuForMe = (props: menuForLanguageProps) => {
  const { anchorEl, openMenuOfLanguage, handleClose } = props;
  return (
    <Menu anchorEl={anchorEl} open={openMenuOfLanguage} onClose={handleClose}>
      <MenuItem onClick={handleClose}>
        <Stack gap={2}>
          <Typography display={"block"}>Login to watch trendy content</Typography>
          <Box textAlign={"center"}>
            <Button
              variant="contained"
              color={"success"}
              sx={{
                padding: "4px 40px",
                backgroundColor: "rgb(28, 199, 73)",
                "&:hover": { opacity: 0.8, backgroundColor: "rgb(28, 199, 73)" },
              }}
            >
              Login
            </Button>
          </Box>
        </Stack>
      </MenuItem>
    </Menu>
  );
};

export default MenuForMe;
