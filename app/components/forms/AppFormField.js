import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  // We use Formik's Context to get the data we need without passing them as props
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)} // when leaving the input field set the touched state to true
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage
        error={errors[name]}
        // an error can be visible only when the corresponding input field has already been touched
        // this is a fix for showing the error only to the filled fields and not triggering the ones still blank
        visible={touched[name]}
      />
    </>
  );
}

export default AppFormField;
