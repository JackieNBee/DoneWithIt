import React from "react";
import { Formik } from "formik";

// Encapsulate Formik's weird initial configuration syntax inside this component so forms' code are cleaner

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
