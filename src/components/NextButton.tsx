import React from "react";
import { useForm } from "../utils/FormContext";
import classNames from "classnames";

type NextButtonProps = {
  type?: "button" | "submit" | "reset";
  confirm?: boolean;
};

export const NextButton: React.FC<NextButtonProps> = ({
  type,
  confirm,
}: NextButtonProps) => {
  const { setFormStep, formStep } = useForm();
  return (
    <button
      type={type}
      className={classNames(
        "text-white",
        "rounded-md",
        "py-3",
        "px-5",
        "mt-3",
        `${confirm ? "bg-purple" : "bg-navy"}`,
      )}
      onClick={() => setFormStep(formStep + 1)}
    >
      {!confirm ? "Next Step" : "Confirm"}
    </button>
  );
};
