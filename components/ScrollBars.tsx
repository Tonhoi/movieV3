import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Scrollbars, { ScrollbarProps } from "react-custom-scrollbars";

interface IScrollBarsProps extends ScrollbarProps {
  children: ReactNode;
}

interface RenderThumbProps {
  style: {
    position: string;
    display: string;
    width: string;
  };
}

const renderThumb = ({ style, ...props }: RenderThumbProps) => {
  // const thumbStyle = {
  //   backgroundColor: "rgba(147, 147, 147, 0.5)",
  // };
  return (
    <Box
      sx={{
        width: style.width,
        display: style.display,
        position: style.position,
        // ...thumbStyle,
        backgroundColor: "rgba(147, 147, 147, 0.5)",
      }}
      {...props}
    />
  );
};

const ScrollBars = (props: IScrollBarsProps) => {
  const { children } = props;
  return (
    <Scrollbars
      style={{ height: 240 }}
      autoHide
      renderThumbVertical={renderThumb}
      {...props}
    >
      {children}
    </Scrollbars>
  );
};

export default ScrollBars;
