import {
    FormControl,
    FormLabel,
    Input,
    Autocomplete as MuiAutocomplete,
    AutocompleteProps,
    AutocompleteRenderInputParams,
  } from "@mui/material";
  
  import React, { useCallback } from "react";
  
  // function MuiAutocomplete<T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined>(props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>): JSX.Element
  
  export interface ExtendedAutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
  > extends Omit<
      AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
      "renderInput"
    > {
    label?: string;
    placeholder?: string;
    renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
  }
  
  const Autocomplete = <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
  >(
    props: ExtendedAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
  ) => {
    const { label, placeholder, renderInput, ...restProps } = props;
  
    const renderInputCb = useCallback(
      (props: AutocompleteRenderInputParams) => {
        const { InputLabelProps, InputProps, inputProps, ...restProps } = props;
  
        if (renderInput) return renderInput(props);
  
        return (
          <FormControl {...restProps}>
            <FormLabel {...InputLabelProps}>{label}</FormLabel>
            <Input {...InputProps} inputProps={inputProps} placeholder={placeholder} />
          </FormControl>
        );
      },
      [renderInput]
    );
  
    return <MuiAutocomplete {...restProps} renderInput={renderInputCb} />;
  };
  
  export default Autocomplete;