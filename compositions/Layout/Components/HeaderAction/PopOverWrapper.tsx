import { Fragment, ReactNode } from "react";
import { Box, Popover, PopoverProps } from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

interface PopOverWrapperProps extends Omit<PopoverProps, "open"> {
  children: ReactNode;
  parentChildren: ReactNode;
}

const PopOverWrapper = (props: PopOverWrapperProps) => {
  const { children, parentChildren, ...restProps } = props;

  return (
    <PopupState variant="popover">
      {(popupState) => (
        <Fragment>
          <Box {...bindTrigger(popupState)}>{parentChildren}</Box>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            {...restProps}
          >
            {children}
          </Popover>
        </Fragment>
      )}
    </PopupState>
  );
};

export default PopOverWrapper;
