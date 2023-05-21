import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Scrollbars, { ScrollbarProps } from "react-custom-scrollbars";

interface IScrollBarsProps extends ScrollbarProps {
  children: ReactNode;
}

const renderThumb = ({ style, ...props }: any) => {
  const thumbStyle = {
    backgroundColor: "rgba(147, 147, 147, 0.5)",
  };
  return <Box style={{ ...style, ...thumbStyle }} {...props} />;
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
