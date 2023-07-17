import React from "react";
import { useFormik } from "formik";
import { FormHeader } from "../FormHeader";
import classNames from "classnames";
import { useForm } from "../../utils/FormContext";

export const InfoForm: React.FC = () => {
  const { formStep, setFormStep } = useForm();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validate() {
      const errors = {};
      if (!formik.values.name) errors.name = "This field is required";
      if (!formik.values.email) errors.email = "This field is required";
      if (!formik.values.phone) errors.phone = "This field is required";
      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
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
        <div className={classNames("flex", "flex-col")}>
          <div className={classNames("flex", "flex-row")}>
            <label htmlFor="name">Name</label>
            {formik.errors.name && formik.touched.name ? (
              <h1 className="ml-auto">{formik.errors.name}</h1>
            ) : null}
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className={classNames("flex", "flex-col")}>
          <div className={classNames("flex", "flex-row")}>
            <label htmlFor="email">Email Address</label>
            {formik.errors.email && formik.touched.email ? (
              <h1 className="ml-auto">{formik.errors.email}</h1>
            ) : null}
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className={classNames("flex", "flex-col")}>
          <div className={classNames("flex", "flex-row")}>
            <label htmlFor="email">Phone Number</label>
            {formik.errors.phone && formik.touched.phone ? (
              <h1 className="ml-auto">{formik.errors.phone}</h1>
            ) : null}
          </div>
          <input
            onChange={formik.handleChange}
            value={formik.values.phone}
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
        <button type="submit" className={classNames("border", "border-black")}>
          Next Step
        </button>
      </form>
    </main>
  );
};
