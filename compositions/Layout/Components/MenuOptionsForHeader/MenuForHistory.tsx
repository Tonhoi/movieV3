import { MouseEventHandler } from "react";
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
import { useMeasure } from "react-use";
import { Scrollbars } from "react-custom-scrollbars";

import { Image, MenuWrapper, Spacing, ArrowRightIcon } from "@/components";
import ProgressForMenuHistory from "./ProgressForMenuHistory";

// image
import demoImageCard from "@/public/image/demoImageCard.jpg";

interface menuForHistoryProps {
  anchorEl: null | HTMLElement;
  openMenuOfLanguage: boolean;
  handleClose: MouseEventHandler<HTMLLIElement> | undefined;
}

const MenuForHistory = (props: menuForHistoryProps) => {
  const { anchorEl, handleClose, openMenuOfLanguage } = props;
  const [ref, { width }] = useMeasure();

  const theme = useTheme();

  return (
    <MenuWrapper anchorEl={anchorEl} open={openMenuOfLanguage} onClose={handleClose}>
      <Scrollbars style={{ height: 100 }} autoHide>
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
                <ProgressForMenuHistory />
              </Box>
            </Stack>
          </StyledWrapperStack>
        </StyledMenuItem>
      </Scrollbars>

      <Spacing spacing={1} />

      <Divider sx={{ backgroundColor: theme.palette.common.white, opacity: "0.5" }} />

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
    </MenuWrapper>
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
    position: "relative",

    width: 110,
    height: 62,
    borderRadius: "4px",

    overflow: "hidden",
  };
});

const StyledHeading = styled(Typography)(() => {
  return {
    width: 130,
    fontWeight: 400,

    color: "#A9A9AC",
    whiteSpace: "nowrap",

    overflow: "hidden",
    textOverflow: "ellipsis",
  };
});
export default MenuForHistory;
