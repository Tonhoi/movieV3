import { Image, Menu, Spacing } from "@/components";
import {
  Box,
  Button,
  Divider,
  MenuItem,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import LinearWithValueLabel from "../LinearWithValueLabel";
import { useMeasure } from "react-use";
import { MouseEventHandler } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import demoImageCard from "@/public/image/demoImageCard.jpg";
import ArrowRightIcon from "@/components/Icons/ArrowRightIcon";

interface menuForHistoryProps {
  anchorEl: null | HTMLElement;
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}

const MenuForHistory = (props: menuForHistoryProps) => {
  const [ref, { width }] = useMeasure();
  const { anchorEl, handleClose, openMenuOfLanguage } = props;
  const theme = useTheme();
  return (
    <Menu anchorEl={anchorEl} open={openMenuOfLanguage} onClose={handleClose}>
      <Scrollbars style={{ height: 300 }} autoHide>
        <StyledMenuItem onClick={handleClose} divider>
          <StyledWrapperStack>
            <StyledImageBlock ref={ref}>
              <Image src={demoImageCard.src} width={width} height={width} />
            </StyledImageBlock>
            <Stack gap={1}>
              <StyledHeading variant="h5">Once We Get Married</StyledHeading>
              <Box>
                <Typography variant="h6" fontWeight={400} color={"#828387"}>
                  Watch to Episode 2
                </Typography>
                <LinearWithValueLabel />
              </Box>
            </Stack>
          </StyledWrapperStack>
        </StyledMenuItem>
      </Scrollbars>
      <Spacing spacing={1} />
      <Divider sx={{ backgroundColor: theme.palette.common.white, opacity: '0.5' }} />
      <Stack marginBottom={"-8px"}>
        <Button
          variant="text"
          fullWidth
          color="inherit"
          sx={{
            alignItems: "center",
          }}
          endIcon={<ArrowRightIcon />}
        >
          More
        </Button>
      </Stack>
    </Menu>
  );
};

const StyledMenuItem = styled(MenuItem)(() => {
  return {
    "&:hover .MuiTypography-h5": { color: "rgb(28, 199, 73)" },
  };
});

const StyledWrapperStack = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    gap: 8,
  };
});

const StyledImageBlock = styled(Box)(() => {
  return {
    width: 110,
    height: 62,
    position: "relative",
    borderRadius: "4px",
    overflow: "hidden",
  };
});

const StyledHeading = styled(Typography)(() => {
  return {
    fontWeight: 400,
    color: "#A9A9AC",
    width: 130,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
});
export default MenuForHistory;
