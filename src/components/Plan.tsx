import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

type PlanProps = {
  name: string;
  price: string;
  icon?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  monthly: boolean;
};

export const Plan: React.FC<PlanProps> = ({
  name,
  price,
  icon,
  onChange,
  monthly,
}: PlanProps) => {
  return (
    <>
      <div className={classNames("border", "border-black", "py-8", "px-4")}>
        <input type="radio" name="plan" value={name} onChange={onChange} />
        <img src={icon} />
        <h1>{name}</h1>
        <p>
          ${price}/{monthly ? "mo" : "yr"}
        </p>
        {monthly ? <p>2 months free</p> : null}
      </div>
    </>
  );
};
