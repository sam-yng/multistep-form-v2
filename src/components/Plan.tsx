import React from "react";
import classNames from "classnames";

type PlanProps = {
  input: React.ReactNode;
  name: string;
  price: string;
  monthly: boolean;
};

export const Plan: React.FC<PlanProps> = ({
  input,
  name,
  price,
  monthly,
}: PlanProps) => {
  return (
    <div
      className={classNames(
        "border",
        "border-lightgray",
        "py-8",
        "px-4",
        "w-full",
        "h-[20vh]",
        "space-y-1",
        "rounded-lg",
        "mt-4",
      )}
    >
      {input}
      <h1 className="text-lg font-medium">{name}</h1>
      <p className="text-coolgray">
        ${price}/{monthly ? "yr" : "mo"}
      </p>
      {monthly ? <p className="font-regular text-sm">2 months free</p> : null}
    </div>
  );
};
