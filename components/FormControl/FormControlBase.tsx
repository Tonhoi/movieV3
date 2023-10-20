import React from "react";
import { Control, Path, FieldValues, useController } from "react-hook-form";

import {
  FormLabel,
  InputProps,
  FormControl,
  FormLabelProps,
  FormControlProps,
  FormHelperTextProps,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";

import FormHelperText from "./FormHelperText";
import CloseCircleFilled from "@/components/Icons/CloseCircleFilled";

export type AugementFormControlBaseProps<T extends FieldValues> = {
  label?: string;
  helperText?: string;
  placeholder?: string;
  InputProps?: InputProps;
  FormLabelProps?: FormLabelProps;
  FormControlProps?: FormControlProps;
  FormHelperTextProps?: FormHelperTextProps;
  control: Control<T, string>;
  name: Path<T>;
};

export type ExtendedInputProps = InputProps & {
  value: any;
  onChange: (...event: any[]) => void;
};

type FormControlBaseProps<T extends FieldValues> = AugementFormControlBaseProps<T> & {
  InputComponent: (props: ExtendedInputProps) => JSX.Element;
};

const FormControlBase = <T extends FieldValues>(props: FormControlBaseProps<T>) => {
  const {
    name,
    label,
    control,
    helperText,
    InputProps,
    placeholder,
    FormLabelProps,
    InputComponent,
    FormControlProps,
    FormHelperTextProps,
  } = props;

  const {
    field: { value, onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl {...FormControlProps} error={!!error}>
      <FormLabel {...FormLabelProps}>{label}</FormLabel>

      <InputComponent
        placeholder={placeholder}
        {...InputProps}
        value={value}
        inputRef={ref}
        onChange={onChange}
        endAdornment={error ? <CloseCircleFilled color="error" /> : null}
        error={!!error}
      />

      <FormHelperText helperText={helperText} FormHelperTextProps={FormHelperTextProps} />

      {error && <MuiFormHelperText>{error.message}</MuiFormHelperText>}
    </FormControl>
  );
};

export default FormControlBase;
