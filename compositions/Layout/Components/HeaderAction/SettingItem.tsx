import { Box, Button, Divider, Typography, styled } from "@mui/material";
import { HeaderActionChildProps } from "./HeaderActionChild";
import { Link } from "@/components";

const SettingItem = (props: HeaderActionChildProps) => {
  const {
    title,
    startIcon: StartIcon,
    endIcon: EndIcon,
    separate,
    child,
    href,
    ...restProps
  } = props;

  return (
    <Container {...restProps}>
      <Button
        variant="text"
        fullWidth
        disableRipple
        href={href}
        LinkComponent={Link}
        startIcon={<StartIcon />}
        endIcon={EndIcon && <EndIcon />}
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

const Container = styled(Box)(() => {
  return {
    ["& .btn"]: {
      padding: "6px 10px",
      justifyContent: "start",
      textTransform: "inherit",

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
