import React from "react";
import { useForm } from "../utils/FormContext";
import classNames from "classnames";

export const NextButton: React.FC = () => {
  const { setFormStep, formStep } = useForm();
  return (
    <button
      className={classNames(
        "bg-navy",
        "text-white",
        "rounded-md",
        "py-3",
        "px-5",
        "mt-3",
      )}
      onClick={() => setFormStep(formStep + 1)}
    >
      Next Step
    </button>
  );
};
