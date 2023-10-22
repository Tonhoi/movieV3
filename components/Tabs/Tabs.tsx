import { styled, Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";

interface StyledMuiTabsProps extends MuiTabsProps {}

interface TabsProps<T> {
  value: T;
  children: React.ReactNode;
  onChange: (event: React.SyntheticEvent, newValue: T) => void;
}

type DefaultTabsProps<T> = StyledMuiTabsProps & TabsProps<T>;

export default function Tabs<T>(props: DefaultTabsProps<T>) {
  const { children, value, onChange, ...restProps } = props;
  return (
    <StyledMuiTabs value={value} onChange={onChange} {...restProps}>
      {children}
    </StyledMuiTabs>
  );
}

const StyledMuiTabs = styled(MuiTabs)(({ theme }) => {
  return {
    "& .MuiTabs-flexContainer": {
      justifyContent: "flex-start",
      flexDirection: "row",
      borderBottom: "2px solid #34363B",
    },

    ["& .MuiButtonBase-root"]: {
      color: theme.palette.common.black,
      opacity: 0.6,
      textTransform: "capitalize",
    },

    ["& .Mui-selected"]: {
      color: `${theme.palette.common.black} !important`,
      opacity: 1,
    },

    "& .MuiTabs-indicator": {
      backgroundColor: "#1cc749",
    },
  };
});
