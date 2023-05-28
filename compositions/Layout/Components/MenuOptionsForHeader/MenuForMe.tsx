import { MouseEventHandler } from "react";
import { MenuWrapper } from "@/components";
import { Box, Button, MenuItem, Stack, Typography, styled } from "@mui/material";
import { useRouter } from "next/router";
import { ROUTES } from "@/routers";

interface menuForLanguageProps {
  anchorEl: null | HTMLElement;
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}
const MenuForMe = (props: menuForLanguageProps) => {
  const { anchorEl, openMenuOfLanguage, handleClose } = props;
  const router = useRouter();

  return (
    <MenuWrapper anchorEl={anchorEl} open={openMenuOfLanguage} onClose={handleClose}>
      <MenuItem disableRipple>
        <Stack gap={2}>
          <Typography display={"block"}>Login to watch trendy content</Typography>

          <Box textAlign={"center"}>
            <StyledButton
              variant="contained"
              color={"success"}
              onClick={() => router.push(ROUTES.login)}
            >
              Login
            </StyledButton>
          </Box>
        </Stack>
      </MenuItem>
    </MenuWrapper>
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
