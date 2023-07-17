import React from "react";
import { FormHeader } from "../FormHeader";
import { AddOn } from "../AddOn";
import classNames from "classnames";
import { useForm } from "../../utils/FormContext";
import { useFormik } from "formik";
import { AddOns } from "../../utils/FormContext";

export const AddOnForm: React.FC = () => {
  const { formStep, setFormStep, addOns } = useForm();

  const formik = useFormik({
    initialValues: {
      addOns: addOns,
    },
    onSubmit: () => {
      console.log(addOns);
    },
  });

  return (
    <main>
      <FormHeader
        title="Pick add-ons"
        instructions="Add-ons help enhance your gaming experience."
      />
      <form onSubmit={formik.handleSubmit} className={classNames("space-y-4")}>
        <AddOn
          number={1}
          name="Online service"
          description="Access to multiplayer games"
        />
        <AddOn
          number={2}
          name="Larger storage"
          description="Extra 1TB of cloud save"
        />
        <AddOn
          number={3}
          name="Customizable profile"
          description="Custom theme on your profile"
        />
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
