import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppTextInput from '../AppTextInput';

function AppFormField({ name,...otherProps }) {
  const { setFieldTouched, touched, handleChange, errors } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {touched[name] && <ErrorMessage error={errors[name]} />}
    </>
  );
}

export default AppFormField;
