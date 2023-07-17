import React from "react";
import classNames from "classnames";
import { Plan } from "../Plan";
import { useForm } from "../../utils/FormContext";
import monthly from "../../assets/images/monthly.png";
import yearly from "../../assets/images/yearly.png";
import { useFormik } from "formik";
import { FormHeader } from "../FormHeader";

export const PlanForm: React.FC = () => {
  const { setFormStep, formStep } = useForm();

  const formik = useFormik({
    initialValues: {
      plan: 1,
      billing: "monthly",
    },
    onSubmit: (values) => {
      console.log(values);
      setFormStep(formStep + 1);
    },
  });
  return (
    <main>
      <FormHeader
        title="Select your plan"
        instructions="You have the option of monthly or yearly billing"
      />
      <form onSubmit={formik.handleSubmit}>
        <div className={classNames("flex", "flex-row", "space-x-12")}>
          <Plan name="Arcade" price="9" number={1} />
          <Plan name="Advanced" price="12" number={2} />
          <Plan name="Pro" price="15" number={3} />
        </div>
        <input value={formik.values.billing} onChange={formik.handleChange}>
          <img
            className={classNames("w-12")}
            src={formik.values.billing === "monthly" ? monthly : yearly}
          />
        </input>
        <div>
          <button
            className={classNames("border", "border-black")}
            onClick={() => setFormStep(formStep - 1)}
          >
            Go Back
          </button>
          <button
            className={classNames("border", "border-black", "ml-10")}
            type="submit"
          >
            Next Step
          </button>
        </div>
      </form>
    </main>
  );
};
