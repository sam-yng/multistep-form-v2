/* eslint-disable indent */
import React, { useState } from "react";
import classNames from "classnames";
import { Controller, useForm } from "react-hook-form";
import { useFormContext } from "../utils/FormContext";
import { FormHeader } from "./FormHeader";
import { Field } from "./Field";
import { Switch } from "@mui/material";
import { BackButton } from "./BackButton";
import { NextButton } from "./NextButton";
import { Plan } from "./Plan";
import { AddOn } from "./AddOn";
import heart from "../assets/images/icon-thank-you.svg";
import { AddOnItem } from "./AddOnItem";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  yearlyBilling: boolean;
  OnlineService: boolean;
  LargerStorage: boolean;
  CustomizableProfile: boolean;
};

export const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    control,
    setValue,
  } = useForm<FormData>();
  const { formStep, setFormStep } = useFormContext();
  const [showYearly, setShowYearly] = useState<boolean>(false);

  const yearlyBilling = getValues("yearlyBilling");
  const plan = getValues("plan");
  const OnlineService = getValues("OnlineService");
  const LargerStorage = getValues("LargerStorage");
  const CustomizableProfile = getValues("CustomizableProfile");

  const submitForm = (formData: FormData) => {
    console.log(formData);
    setFormStep(formStep + 1);
  };

  const handleGoBack = () => {
    if (formStep === 3) {
      setValue("plan", "");
      setValue("yearlyBilling", false);
    }
    if (formStep === 4) {
      setValue("OnlineService", false);
      setValue("CustomizableProfile", false);
      setValue("LargerStorage", false);
    }
    setFormStep(formStep - 1);
  };

  return (
    <form className={classNames("")} onSubmit={handleSubmit(submitForm)}>
      {formStep === 1 ? (
        <div className={classNames("flex", "flex-col", "ml-4")}>
          <FormHeader
            title="Personal info"
            instructions="Please provide your name, email address, and phone number."
          />
          <div className={classNames("mt-4", "space-y-4")}>
            <Field
              input={
                <input
                  {...register("name", { required: "This field is required" })}
                  placeholder="e.g. Stephen King"
                  className={classNames(
                    "rounded-md",
                    "border",
                    "border-lightgray",
                    "p-3",
                    "font-medium",
                  )}
                  type="text"
                />
              }
              label="Name"
              errors={errors ? errors.name?.message : null}
            />
            <Field
              input={
                <input
                  {...register("email", {
                    required: "This field is required",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  placeholder="e.g. stephenking@gmail.com"
                  className={classNames(
                    "rounded-md",
                    "border",
                    "border-lightgray",
                    "p-3",
                    "font-medium",
                  )}
                  type="text"
                />
              }
              label="Email Address"
              errors={errors ? errors.email?.message : null}
            />
            <Field
              input={
                <input
                  {...register("phone", { required: "This field is required" })}
                  placeholder="e.g. +1 234 567 890"
                  className={classNames(
                    "rounded-md",
                    "border",
                    "border-lightgray",
                    "p-3",
                    "font-medium",
                  )}
                  type="number"
                />
              }
              label="Phone Number"
              errors={errors ? errors.phone?.message : null}
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
                name="Arcade"
                price={yearlyBilling ? "90" : "9"}
                monthly={yearlyBilling ? true : false}
                input={
                  <input
                    type="radio"
                    {...register("plan", { required: "Must choose a plan" })}
                    value="Arcade"
                  />
                }
              />
              <Plan
                name="Advanced"
                price={yearlyBilling ? "120" : "12"}
                monthly={yearlyBilling ? true : false}
                input={
                  <input
                    type="radio"
                    {...register("plan", { required: "Must choose a plan" })}
                    value="Advanced"
                  />
                }
              />
              <Plan
                name="Pro"
                price={yearlyBilling ? "150" : "15"}
                monthly={yearlyBilling ? true : false}
                input={
                  <input
                    type="radio"
                    {...register("plan", { required: "Must choose a plan" })}
                    value="Pro"
                  />
                }
              />
            </div>
            {errors ? errors.plan?.message : null}
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
              <h1 className={classNames("font-medium")}>Monthly</h1>
              <Controller
                control={control}
                name="yearlyBilling"
                defaultValue={false}
                render={({ field: { onChange, value, name } }) => (
                  <Switch
                    onClick={() => setShowYearly(!showYearly)}
                    name={name}
                    value={value}
                    onChange={onChange}
                  />
                )}
              />
              <h1 className={classNames("font-medium")}>Yearly</h1>
            </div>
            <div
              className={classNames("flex", "justify-between", "items-center")}
            >
              <BackButton handleClick={handleGoBack} />
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
      ) : formStep === 3 ? (
        <div>
          <FormHeader
            title="Pick add-ons"
            instructions="Add-ons help enhance your gaming experience."
          />
          <div className={classNames("space-y-5")}>
            <AddOn
              name="Online service"
              description="Access to multiplayer games"
              price={yearlyBilling ? "+$10/yr" : "+$1/mo"}
              input={<input type="checkbox" {...register("OnlineService")} />}
            />
            <AddOn
              name="Larger storage"
              description="Extra 1TB of cloud save"
              price={yearlyBilling ? "+$20/yr" : "+$2/mo"}
              input={<input type="checkbox" {...register("LargerStorage")} />}
            />
            <AddOn
              name="Customizable profile"
              description="Custom theme on your profile"
              price={yearlyBilling ? "+$20/yr" : "+$2/mo"}
              input={
                <input type="checkbox" {...register("CustomizableProfile")} />
              }
            />
            <div
              className={classNames("flex", "justify-between", "items-center")}
            >
              <BackButton handleClick={handleGoBack} />
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
                  <h1>{plan}</h1>
                  <h1>{yearlyBilling ? "(Yearly)" : "(Monthly)"}</h1>
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
                {plan === "Arcade" && yearlyBilling
                  ? "$90/yr"
                  : plan === "Arcade" && !yearlyBilling
                  ? "$9/mo"
                  : null}
                {plan === "Advanced" && yearlyBilling
                  ? "$120/yr"
                  : plan === "Advanced" && !yearlyBilling
                  ? "$12/mo"
                  : null}
                {plan === "Pro" && yearlyBilling
                  ? "$150/yr"
                  : plan === "Pro" && !yearlyBilling
                  ? "$15/mo"
                  : null}
              </p>
            </div>
            <ul className="space-y-4 mt-2">
              <AddOnItem
                conOne={OnlineService}
                conTwo={yearlyBilling}
                yearPrice="+$10/yr"
                monthPrice="+$1/mo"
                name="Online service"
              />
              <AddOnItem
                conOne={LargerStorage}
                conTwo={yearlyBilling}
                yearPrice="+$20/yr"
                monthPrice="+$2/mo"
                name="Larger storage"
              />
              <AddOnItem
                conOne={CustomizableProfile}
                conTwo={yearlyBilling}
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
          ></div>
          <div
            className={classNames(
              "flex",
              "justify-between",
              "items-center",
              "mt-4",
            )}
          >
            <BackButton handleClick={handleGoBack} />
            <button
              type="submit"
              className={classNames(
                "text-white",
                "rounded-md",
                "py-3",
                "px-5",
                "mt-3",
                "bg-purple",
              )}
            >
              Confirm
            </button>
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
