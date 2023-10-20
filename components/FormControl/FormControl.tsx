import React from "react";
import { Input } from "@mui/material";
import { FieldValues } from "react-hook-form";

import FormControlBase, {
  AugementFormControlBaseProps,
} from "./FormControlBase";

const FormControl = <T extends FieldValues>(
  props: AugementFormControlBaseProps<T>
) => {
  return <FormControlBase {...props} InputComponent={Input} />;
};

export default FormControl;