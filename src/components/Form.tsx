/* eslint-disable indent */
import React from "react";
import { useForm } from "../utils/FormContext";
import { useFormik } from "formik";
import { FormHeader } from "./FormHeader";
import classNames from "classnames";
import { Input } from "./Input";
import { Plan } from "./Plan";
import Switch from "@mui/material/Switch";
import { AddOn } from "./AddOn";
import heart from "../assets/images/icon-thank-you.svg";

type FormikErrors = {
  name?: string;
  email?: string;
  phone?: string;
  plan?: string;
};

export const Form: React.FC = () => {
  const { formStep, setFormStep } = useForm();

  const costs: number[] = [];
  let total: number = 0;

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
      console.log(formStep);
      console.log(values);
      console.log(costs);
      setFormStep(formStep + 1);
    },
  });

  const handleGoBack = () => {
    if (formStep === 3) {
      formik.values.plan === "Arcade";
      formik.values.yearlyBilling === false;
    }
    if (formStep === 4) {
      formik.values["Online service"] = false;
      formik.values["Larger storage"] = false;
      formik.values["Customizable profile"] = false;
    }
    setFormStep(formStep - 1);
  };

  if (formik.values.plan === "Arcade") {
    if (formik.values.yearlyBilling) {
      costs.push(90);
    } else if (!formik.values.yearlyBilling) {
      costs.push(9);
    }
  } else if (formik.values.plan === "Advanced") {
    if (formik.values.yearlyBilling) {
      costs.push(120);
    } else if (!formik.values.yearlyBilling) {
      costs.push(12);
    }
  } else if (formik.values.plan === "Pro") {
    if (formik.values.yearlyBilling) {
      costs.push(150);
    } else if (!formik.values.yearlyBilling) {
      costs.push(15);
    }
  }

  if (formik.values["Online service"]) {
    if (formik.values.yearlyBilling) {
      costs.push(10);
    } else if (!formik.values.yearlyBilling) {
      costs.push(1);
    }
  }
  if (formik.values["Larger storage"]) {
    if (formik.values.yearlyBilling) {
      costs.push(20);
    } else if (!formik.values.yearlyBilling) {
      costs.push(2);
    }
  }
  if (formik.values["Customizable profile"]) {
    if (formik.values.yearlyBilling) {
      costs.push(20);
    } else if (!formik.values.yearlyBilling) {
      costs.push(2);
    }
  }

  formStep === 4 ? (total = costs.reduce((a, b) => a + b, 0)) : null;

  return (
    <form onSubmit={formik.handleSubmit}>
      {formStep === 1 ? (
        <div className={classNames("flex", "flex-col", "ml-4")}>
          <FormHeader
            title="Personal info"
            instructions="Please provide your name, email address, and phone number."
          />
          <div className={classNames("mt-4", "space-y-4")}>
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
              onClick={() => setFormStep(formStep + 1)}
              className={classNames("border", "border-black")}
            >
              Next Step
            </button>
          </div>
        </div>
      ) : formStep === 2 ? (
        <div>
          <FormHeader
            title="Select your plan"
            instructions="You have the option of monthly or yearly billing"
          />
          <div>
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
                onClick={handleGoBack}
              >
                Go Back
              </button>
              <button
                className={classNames("border", "border-black", "ml-10")}
                onClick={() => setFormStep(formStep + 1)}
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      ) : formStep === 3 ? (
        <div>
          <FormHeader
            title="Pick add-ons"
            instructions="Add-ons help enhance your gaming experience."
          />
          <div className={classNames("space-y-4")}>
            <AddOn
              onChange={formik.handleChange}
              name="Online service"
              description="Access to multiplayer games"
              price={formik.values.yearlyBilling ? "+$10/yr" : "+$1/mo"}
            />
            <AddOn
              onChange={formik.handleChange}
              name="Larger storage"
              description="Extra 1TB of cloud save"
              price={formik.values.yearlyBilling ? "+$20/yr" : "+$2/mo"}
            />
            <AddOn
              onChange={formik.handleChange}
              name="Customizable profile"
              description="Custom theme on your profile"
              price={formik.values.yearlyBilling ? "+$20/yr" : "+$2/mo"}
            />
            <div>
              <button
                className={classNames("border", "border-black")}
                onClick={handleGoBack}
              >
                Go Back
              </button>
              <button
                className={classNames("border", "border-black", "ml-10")}
                onClick={() => setFormStep(formStep + 1)}
              >
                Next Step
              </button>
            </div>
          </div>
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
            <p>
              {formik.values.plan === "Arcade" && formik.values.yearlyBilling
                ? "$90/yr"
                : formik.values.plan === "Arcade" &&
                  !formik.values.yearlyBilling
                ? "$9/mo"
                : null}
              {formik.values.plan === "Advanced" && formik.values.yearlyBilling
                ? "$120/yr"
                : formik.values.plan === "Advanced" &&
                  !formik.values.yearlyBilling
                ? "$12/mo"
                : null}
              {formik.values.plan === "Pro" && formik.values.yearlyBilling
                ? "$150/yr"
                : formik.values.plan === "Pro" && !formik.values.yearlyBilling
                ? "$15/mo"
                : null}
            </p>
            <button onClick={() => setFormStep(2)}>Change</button>
            <ul>
              {formik.values["Online service"] ? (
                <li>
                  Online service{" "}
                  {formik.values.yearlyBilling ? "+$10/yr" : "+$1/mo"}
                </li>
              ) : null}
              {formik.values["Larger storage"] ? (
                <li>
                  Larger storage{" "}
                  {formik.values.yearlyBilling ? "+$20/yr" : "+$2/mo"}
                </li>
              ) : null}
              {formik.values["Customizable profile"] ? (
                <li>
                  Customizable profile{" "}
                  {formik.values.yearlyBilling ? "+$20/yr" : "+$2/mo"}
                </li>
              ) : null}
            </ul>
          </div>
          <p>Total (per {formik.values.yearlyBilling ? "year" : "month"})</p>
          <p>
            ${total}
            {formik.values.yearlyBilling ? "/yr" : "/mo"}
          </p>
          <div>
            <button
              className={classNames("border", "border-black")}
              onClick={handleGoBack}
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
        <div className={classNames("flex", "flex-col")}>
          <img className={classNames("h-12")} src={heart} />
          <h1>Thank yoy!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      ) : null}
    </form>
  );
};
