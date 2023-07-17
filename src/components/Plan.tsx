import React from "react";
import classNames from "classnames";
import { useForm } from "../utils/FormContext";

type PlanProps = {
  name: string;
  price: string;
  icon?: string;
  number: number;
};

export const Plan: React.FC<PlanProps> = ({
  name,
  price,
  icon,
  number,
}: PlanProps) => {
  const { setPlan, plan } = useForm();

  return (
    <div
      onClick={() => setPlan(number)}
      className={classNames(
        "border",
        "border-black",
        "py-8",
        "px-4",
        "cursor-pointer",
        `${number === plan ? "bg-red-100" : ""}`,
      )}
    >
      <img src={icon} />
      <h1>{name}</h1>
      <p>${price}/mo</p>
    </div>
  );
};
