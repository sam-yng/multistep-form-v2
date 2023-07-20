import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

type AddOnProps = {
  name: string;
  description: string;
  price: string;
  input: React.ReactNode;
};

export const AddOn: React.FC<AddOnProps> = ({
  name,
  description,
  price,
  input,
}: AddOnProps) => {
  return (
    <div
      className={classNames(
        "flex",
        "flex-row",
        "border",
        "border-lightgray",
        "rounded-lg",
        "items-center",
        "py-3",
        "px-5",
        "mt-4",
      )}
    >
      {/* <input type="checkbox" onChange={onChange} value={name} name={name} /> */}
      {input}
      <div className={classNames("flex", "flex-col", "ml-4")}>
        <h1 className="font-medium">{name}</h1>
        <p className="text-coolgray">{description}</p>
      </div>
      <p className="ml-auto">{price}</p>
    </div>
  );
};
