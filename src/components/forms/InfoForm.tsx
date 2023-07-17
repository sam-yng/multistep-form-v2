import React from "react";
import { Formik } from "formik";
import { FormHeader } from "../FormHeader";

export const InfoForm: React.FC = () => {
  return (
    <main>
      <FormHeader
        title="Personal info"
        instructions="Please provide your name, email address, and phone number."
      />
    </main>
  );
};
