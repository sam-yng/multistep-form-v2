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
import { NextButton } from "./NextButton";
import { BackButton } from "./BackButton";
import { AddOnList as AddOnItem } from "./AddOnList";

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
            <div className="flex justify-end">
              <button
                type="submit"
                className={classNames(
                  "text-white",
                  "rounded-md",
                  "py-3",
                  "px-5",
                  "mt-3",
                  "bg-navy",
                )}
              >
                Next Step
              </button>
            </div>
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
            <div
              className={classNames(
                "flex",
                "flex-row",
                "items-center",
                "justify-center",
                "bg-alb",
                "rounded-lg",
                "mt-6",
              )}
            >
              <h1
                className={classNames(
                  "font-medium",
                  `${formik.values.yearlyBilling ? "text-coolgray" : ""}`,
                )}
              >
                Monthly
              </h1>
              <Switch
                id="yearlyBilling"
                value={formik.values.yearlyBilling}
                name="yearlyBilling"
                onChange={formik.handleChange}
              />
              <h1
                className={classNames(
                  "font-medium",
                  `${!formik.values.yearlyBilling ? "text-coolgray" : ""}`,
                )}
              >
                Yearly
              </h1>
            </div>
            <div
              className={classNames("flex", "justify-between", "items-center")}
            >
              <BackButton handleClick={handleGoBack} />
              <NextButton />
            </div>
          </div>
        </div>
      ) : formStep === 3 ? (
        <div>
          <FormHeader
            title="Pick add-ons"
            instructions="Add-ons help enhance your gaming experience."
          />
          <div className={classNames("space-y-5")}>
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
            <div
              className={classNames("flex", "justify-between", "items-center")}
            >
              <BackButton handleClick={handleGoBack} />
              <NextButton />
            </div>
          </div>
        </div>
      ) : formStep === 4 ? (
        <div>
          <FormHeader
            title="Finishing up"
            instructions="Double-check everything looks OK before confirming."
          />
          <div
            className={classNames(
              "mt-4",
              "px-4",
              "py-2",
              "bg-alb",
              "rounded-lg",
            )}
          >
            <div className="flex flex-row items-center justify-between">
              <div
                className={classNames(
                  "flex",
                  "flex-col",
                  "justify-start",
                  "mb-4",
                )}
              >
                <div
                  className={classNames(
                    "flex",
                    "flex-row",
                    "space-x-1",
                    "font-medium",
                    "text-lg",
                  )}
                >
                  <h1>{formik.values.plan}</h1>
                  <h1>
                    {formik.values.yearlyBilling ? "(Yearly)" : "(Monthly)"}
                  </h1>
                </div>
                <button
                  className={classNames(
                    "font-regular",
                    "text-coolgray",
                    "underline-offset-4",
                    "underline",
                    "mr-auto",
                  )}
                  onClick={() => setFormStep(2)}
                >
                  Change
                </button>
              </div>
              <p className={classNames("font-medium")}>
                {formik.values.plan === "Arcade" && formik.values.yearlyBilling
                  ? "$90/yr"
                  : formik.values.plan === "Arcade" &&
                    !formik.values.yearlyBilling
                  ? "$9/mo"
                  : null}
                {formik.values.plan === "Advanced" &&
                formik.values.yearlyBilling
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
            </div>
            <ul className="space-y-4 mt-2">
              <AddOnItem
                conOne={formik.values["Online service"]}
                conTwo={formik.values.yearlyBilling}
                yearPrice="+$10/yr"
                monthPrice="+$1/mo"
                name="Online service"
              />
              <AddOnItem
                conOne={formik.values["Larger storage"]}
                conTwo={formik.values.yearlyBilling}
                yearPrice="+$20/yr"
                monthPrice="+$2/mo"
                name="Larger storage"
              />
              <AddOnItem
                conOne={formik.values["Customizable profile"]}
                conTwo={formik.values.yearlyBilling}
                yearPrice="+$20/yr"
                monthPrice="+$2/mo"
                name="Customizable profile"
              />
            </ul>
          </div>
          <div
            className={classNames(
              "flex",
              "flex-row",
              "justify-between",
              "mx-4",
              "mt-4",
              "font-regular",
            )}
          >
            <p className="text-coolgray">
              Total (per {formik.values.yearlyBilling ? "year" : "month"})
            </p>
            <p className={classNames("text-purple", "font-bold", "text-xl")}>
              ${total}
              {formik.values.yearlyBilling ? "/yr" : "/mo"}
            </p>
          </div>
          <div
            className={classNames(
              "flex",
              "justify-between",
              "items-center",
              "mt-4",
            )}
          >
            <BackButton handleClick={handleGoBack} />
            <NextButton type="submit" confirm />
          </div>
        </div>
      ) : formStep === 5 ? (
        <div
          className={classNames(
            "flex",
            "flex-col",
            "text-center",
            "mt-24",
            "space-y-4",
          )}
        >
          <img className={classNames("h-16", "mb-4")} src={heart} />
          <h1 className={classNames("font-bold", "text-3xl")}>Thank you!</h1>
          <p className={classNames("font-regular", "text-coolgray", "text-lg")}>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      ) : null}
    </form>
  );
};
