import { HTMLAttributes, memo } from "react";

import {
  Divider,
  Stack,
  styled,
  useTheme,
  Typography,
  AutocompleteRenderOptionState,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useMeasure } from "react-use";

import { SearchIcon } from "@/components";
import FormControlForAutocomplete from "@/compositions/FormControl/FormControlForAutocomplete";
import { CustomInput } from "@/compositions";
import { top100Films } from "@/constant";

const HeaderSearch = () => {
  const { control } = useForm();
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const theme = useTheme();

  return (
    <StyledSearchBlock ref={ref}>
      <StyledFormControlForAutocomplete
        freeSolo
        loading
        control={control}
        name="search"
        placeholder="Search here"
        ListboxComponent={CustomInput}
        options={top100Films}
        loadingText={<LoadingText />}
        renderOption={(
          props: HTMLAttributes<HTMLLIElement>,
          option: any,
          state: AutocompleteRenderOptionState
        ) => {
          return (
            <StyledCustomRenderOptions key={state.index}>
              <Typography>{option.year}</Typography>
              <Typography variant={"h5"}>{option.label}</Typography>
            </StyledCustomRenderOptions>
          );
        }}
        slotProps={{
          paper: {
            sx: {
              width: width,
              backgroundColor: theme.palette.secondary.main,
              marginTop: "16px",
            },
          },
        }}
        ListboxProps={{
          sx: {
            maxHeight: "470px",
            overflow: "hidden",
            backgroundColor: theme.palette.secondary.main,
            color: "#bcbdbe",
          },
        }}
      />

      <StyledSearchIconBlock>
        <StyledDivider orientation="vertical" flexItem />

        <StyledSearchIcon />
      </StyledSearchIconBlock>
    </StyledSearchBlock>
  );
};

const LoadingText = () => {
  const theme = useTheme();
  return (
    <Typography variant={"h5"} color={theme.palette.common.white}>
      Không có kết quả tìm kiếm
    </Typography>
  );
};

const StyledSearchBlock = styled(Stack)(({ theme }) => {
  return {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "fit-content",
    padding: "2px 0",

    borderRadius: 4,
    background: theme.palette.opacity.white_02,
  };
});

const StyledSearchIconBlock = styled(Stack)(() => {
  return {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: "0 12px 0 20px",
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

const StyledFormControlForAutocomplete = styled(FormControlForAutocomplete)(
  ({ theme }) => {
    return {
      flex: 1,

      "& .MuiInput-root": {
        margin: 0,
        paddingLeft: "12px",

        "&::before, &:hover::before, &::after, &:hover::after": {
          borderBottom: "none !important",
        },

        "& input, & > div > button": {
          color: theme.palette.common.white,
        },
      },
    };
  }
);

const StyledCustomRenderOptions = styled(Stack)(({ theme }) => {
  return {
    flexDirection: "row",
    alignItems: "center",
    padding: "14px 16px",
    gap: 8,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#ffffff14",
      transition: "all linear 0.2s",

      "& > h5": {
        color: theme.palette.text_hover.main,
        transition: "all linear 0.2s",
      },
    },
  };
});

const StyledDivider = styled(Divider)(() => {
  return {
    backgroundColor: "#bcbdbe",
  };
});

export default memo(HeaderSearch);
