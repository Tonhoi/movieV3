import { Box, BoxProps, SvgIconProps, styled } from "@mui/material";
import SettingItem from "./SettingItem";
import PopOverWrapper from "./PopOverWrapper";

interface ChildProps {
  id: string;
  title: string;
  start_icon: (props: SvgIconProps) => JSX.Element;
  end_icon?: (props: SvgIconProps) => JSX.Element;
  separate: boolean;
}

export interface HeaderActionChildProps extends BoxProps {
  title: string;
  startIcon: (props: SvgIconProps) => JSX.Element;
  endIcon?: (props: SvgIconProps) => JSX.Element;
  separate: boolean;
  href?: string | undefined;
  child: Array<ChildProps> | undefined;
}

const HeaderActionChild = (props: HeaderActionChildProps) => {
  const { child, href } = props;

  return (
    <Container>
      {child ? (
        <PopOverWrapper
          parentChildren={<SettingItem {...props} />}
          disablePortal
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Box className={"poper-wrapper"}>
            {child.map((el: any) => (
              <SettingItem
                key={el.id}
                startIcon={el.start_icon}
                endIcon={el.end_icon && el.end_icon}
                title={el.title}
                separate={el.separate}
                child={el.child}
                href={href}
                onClick={props.onClick}
              />
            ))}
          </Box>
        </PopOverWrapper>
      ) : (
        <SettingItem {...props} />
      )}
    </Container>
  );
};

const Container = styled(Box)(() => {
  return {
    ["& .poper-wrapper"]: {
      backgroundColor: "#292e3d",
      minWidth: 180,
      maxWidth: 260,
      padding: 6,

      ["& .btn.active"]: {
        color: "#00d639 !important",
      },
    },
  };
});

export default HeaderActionChild;
