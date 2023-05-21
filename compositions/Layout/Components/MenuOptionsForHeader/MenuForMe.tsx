import { Menu } from "@/components";
import { Box, Button, MenuItem, Stack, Typography, styled } from "@mui/material";
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
            <StyledButton variant="contained" color={"success"}>
              Login
            </StyledButton>
          </Box>
        </Stack>
      </MenuItem>
    </Menu>
  );
};

const StyledButton = styled(Button)(() => {
  return {
    padding: "4px 40px",
    backgroundColor: "rgb(28, 199, 73)",
    "&:hover": { opacity: 0.8, backgroundColor: "rgb(28, 199, 73)" },
  };
});

export default MenuForMe;
