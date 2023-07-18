import React from "react";
import { useForm } from "../utils/FormContext";
import { useFormik } from "formik";
import { FormHeader } from "./FormHeader";
import classNames from "classnames";
import { Input } from "./Input";
import { Plan } from "./Plan";
import Switch from "@mui/material/Switch";
import { AddOn } from "./AddOn";

type FormikErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

export const Form: React.FC = () => {
  const { formStep, setFormStep } = useForm();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      plan: "Arcade",
      yearlyBilling: false,
      "Online service": false,
      "Larger storage": false,
      "Customizable profile": false,
    },
    validate() {
      const errors: FormikErrors = {};
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
      console.log(values);
      setFormStep(formStep + 1);
    },
  });
  return (
    <main>
      {formStep === 1 ? (
        <div className={classNames("flex", "flex-col", "ml-4")}>
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
              type="number"
            />
            <button
              type="submit"
              className={classNames("border", "border-black")}
            >
              Next Step
            </button>
          </form>
        </div>
      ) : formStep === 2 ? (
        <div>
          <FormHeader
            title="Select your plan"
            instructions="You have the option of monthly or yearly billing"
          />
          <form onSubmit={formik.handleSubmit}>
            <div className={classNames("flex", "flex-row", "space-x-12")}>
              <Plan
                monthly={formik.values.yearlyBilling ? true : false}
                onChange={formik.handleChange}
                name="Arcade"
                price={formik.values.yearlyBilling ? "90" : "9"}
              />
              <Plan
                monthly={formik.values.yearlyBilling ? true : false}
                onChange={formik.handleChange}
                name="Advanced"
                price={formik.values.yearlyBilling ? "120" : "12"}
              />
              <Plan
                monthly={formik.values.yearlyBilling ? true : false}
                onChange={formik.handleChange}
                name="Pro"
                price={formik.values.yearlyBilling ? "150" : "15"}
              />
            </div>
            <div className={classNames("flex", "flex-row", "items-center")}>
              <h1>Monthly</h1>
              <Switch
                id="yearlyBilling"
                value={formik.values.yearlyBilling}
                name="yearlyBilling"
                onChange={formik.handleChange}
              />
              <h1>Yearly</h1>
            </div>
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
        </div>
      ) : formStep === 3 ? (
        <div>
          <FormHeader
            title="Pick add-ons"
            instructions="Add-ons help enhance your gaming experience."
          />
          <form
            onSubmit={formik.handleSubmit}
            className={classNames("space-y-4")}
          >
            <AddOn
              onChange={formik.handleChange}
              name="Online service"
              description="Access to multiplayer games"
            />
            <AddOn
              onChange={formik.handleChange}
              name="Larger storage"
              description="Extra 1TB of cloud save"
            />
            <AddOn
              onChange={formik.handleChange}
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
        </div>
      ) : formStep === 4 ? (
        <div>
          <FormHeader
            title="Finishing up"
            instructions="Double-check everything looks OK before confirming."
          />
          <div className={classNames("border", "border-black")}>
            <h1>{formik.values.plan}</h1>
            {formik.values.yearlyBilling ? (
              <h1>(Yearly)</h1>
            ) : (
              <h1>(Monthly)</h1>
            )}
            <button onClick={() => setFormStep(2)}>Change</button>
            <ul>
              {formik.values["Online service"] ? (
                <li>Online service +$1/mo</li>
              ) : null}
              {formik.values["Larger storage"] ? (
                <li>Larger storage +$2/mo</li>
              ) : null}
              {formik.values["Customizable profile"] ? (
                <li>Customizable profile +$2/mo</li>
              ) : null}
            </ul>
          </div>
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
        </div>
      ) : formStep === 5 ? (
        <h1>hello</h1>
      ) : null}
    </main>
  );
};
