import { useCallback } from "react";
import { Control, Path, FieldValues, useController } from "react-hook-form";

import {
  Input,
  FormLabel,
  FormControl,
  FormHelperTextProps,
  AutocompleteRenderInputParams,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";

import Autocomplete, {
  ExtendedAutocompleteProps,
} from "@/components/Autocomplete/Autocomplete";

import FormHelperText from "./FormHelperText";

interface FormControlForAutocompleteProps<
  T extends FieldValues,
  V,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends ExtendedAutocompleteProps<V, Multiple, DisableClearable, FreeSolo> {
  control: Control<T, string>;
  name: Path<T>;
  helperText?: string;
  FormHelperTextProps?: FormHelperTextProps;
}

const FormControlForAutocomplete = <
  T extends FieldValues,
  V,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>(
  props: FormControlForAutocompleteProps<T, V, Multiple, DisableClearable, FreeSolo>
) => {
  const {
    control,
    name,
    label,
    placeholder,
    helperText,
    FormHelperTextProps,
    ...restProps
  } = props;
  const {
    field: { value, ref, onChange },
    fieldState: { error },
  } = useController({ control, name });

  const renderInput = useCallback(
    (props: AutocompleteRenderInputParams) => {
      const { InputLabelProps, InputProps, inputProps, ...restProps } = props;

      return (
        <FormControl error={!!error} {...restProps}>
          <FormLabel {...InputLabelProps}>{label}</FormLabel>
          <Input
            {...InputProps}
            inputProps={inputProps}
            placeholder={placeholder}
            inputRef={ref}
          />
          <FormHelperText
            helperText={helperText}
            FormHelperTextProps={FormHelperTextProps}
          />
          {error && <MuiFormHelperText>{error.message}</MuiFormHelperText>}
        </FormControl>
      );
    },
    [error]
  );

  return (
    <Autocomplete
      {...restProps}
      onChange={(_, value) => {
        onChange(value);
      }}
      value={value}
      renderInput={renderInput}
    />
  );
};

export default FormControlForAutocomplete;
