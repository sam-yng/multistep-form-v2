import React from "react";
import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useFormContext } from "../utils/FormContext";
import { FormHeader } from "./FormHeader";
import { Field } from "./Field";

export type FormData = {
  name: string;
  email: string;
  phone: string;
};

export const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const { formStep, setFormStep } = useFormContext();

  const submitForm = (formData: FormData) => {
    console.log(formData);
    setFormStep(formStep + 1);
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
                  {...register("email", { required: "This field is required" })}
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
      ) : null}
    </form>
  );
};
