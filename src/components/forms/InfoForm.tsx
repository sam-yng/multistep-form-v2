import React from "react";
import { useFormik } from "formik";
import { FormHeader } from "../FormHeader";
import classNames from "classnames";
import { useForm } from "../../utils/FormContext";
import { Input } from "../Input";

export const InfoForm: React.FC = () => {
  const { formStep, setFormStep, setInfo } = useForm();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate() {
      const errors = {};
      if (!formik.values.name) errors.name = "This field is required";
      if (!formik.values.email) {
        errors.email = "This field is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formik.values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!formik.values.phone) errors.phone = "This field is required";
      return errors;
    },
    onSubmit: (values) => {
      setInfo(values);
      setFormStep(formStep + 1);
    },
  });
  return (
    <main className={classNames("flex", "flex-col", "ml-4")}>
      <FormHeader
        title="Personal info"
        instructions="Please provide your name, email address, and phone number."
      />
      <form
        onSubmit={formik.handleSubmit}
        className={classNames("mt-4", "space-y-4")}
      >
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          onChange={formik.handleChange}
          error={formik.errors.name}
          touched={formik.touched.name}
          value={formik.values.name}
          name="name"
        />
        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          onChange={formik.handleChange}
          error={formik.errors.email}
          touched={formik.touched.email}
          value={formik.values.email}
          name="email"
        />
        <Input
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          onChange={formik.handleChange}
          error={formik.errors.phone}
          touched={formik.touched.phone}
          value={formik.values.phone}
          name="phone"
        />
        <button type="submit" className={classNames("border", "border-black")}>
          Next Step
        </button>
      </form>
    </main>
  );
};
