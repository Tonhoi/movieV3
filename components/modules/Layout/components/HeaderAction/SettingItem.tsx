import { MouseEventHandler } from "react";
import { Box, Button, Divider, SvgIconProps, Typography, styled } from "@mui/material";

import { Link } from "@/components/common";

interface SettingItemProps {
  title: string;
  startIcon: (props: SvgIconProps) => JSX.Element;
  separate: boolean;
  href?: string | undefined;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const SettingItem = (props: SettingItemProps) => {
  const { title, startIcon: StartIcon, separate, href, onClick, ...restProps } = props;

  return (
    <Container onClick={onClick} {...restProps}>
      <Button
        variant="text"
        fullWidth
        disableRipple
        href={href}
        LinkComponent={Link}
        startIcon={<StartIcon />}
        className={"btn"}
      >
        <Typography variant="body1" className="title">
          {title}
        </Typography>
      </Button>

      {separate && <Divider className="divided" />}
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => {
  return {
    ["& .btn"]: {
      padding: "6px 10px",
      justifyContent: "start",
      textTransform: "inherit",
      color: theme.palette.common.black,

      ["& .MuiButton-endIcon"]: {
        marginLeft: "auto",
      },
    },

    ["& .divided"]: {
      margin: "10px 0",
    },
  };
});

export default SettingItem;
