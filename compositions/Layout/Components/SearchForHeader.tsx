import { memo } from "react";

import { Divider, Stack, styled, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";

import { SearchIcon } from "@/components";
import { FormControl } from "@/compositions";

const SearchForHeader = () => {
  const { control } = useForm();
  const theme = useTheme();

  return (
    <StyledSearchBlock>
      <FormControl
        InputProps={{
          sx: {
            ":after": {
              borderBottom: "none",
            },
            ":before": {
              borderBottom: "none !important",
            },
            padding: 0,
            color: theme.palette.common.white,
          },
        }}
        FormControlProps={{
          sx: {
            marginTop: "-16px",
            flex: 1,
          },
        }}
        control={control}
        name="search"
        placeholder="Never Give Up"
      />
      <StyledSearchIconBlock>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ backgroundColor: theme.palette.common.white }}
        />
        <StyledSearchIcon />
      </StyledSearchIconBlock>
    </StyledSearchBlock>
  );
};

const StyledSearchBlock = styled(Stack)(() => {
  return {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    padding: "2px 12PX",
    borderRadius: 4,
    background: "rgba(255, 255, 255, 0.2)",
  };
});

const StyledSearchIconBlock = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: "0 0 0 20px",
  };
});

const StyledSearchIcon = styled(SearchIcon)(() => {
  return {
    position: "relative",
    bottom: 2,
    cursor: "pointer",
    ":hover": {
      opacity: 0.8,
      transition: "opacity linear 0.3s",
    },
  };
});

export default memo(SearchForHeader);
