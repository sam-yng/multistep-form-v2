import React from "react";
import classNames from "classnames";
import { useForm } from "../utils/FormContext";

type AddOnProps = {
  name: string;
  description: string;
  number: number;
};

export const AddOn: React.FC<AddOnProps> = ({
  name,
  description,
  number,
}: AddOnProps) => {
  const { addOns, setAddOns } = useForm();

  const handleChange = (e) => {
    setAddOns({
      ...addOns,
      [e.target.value]: true,
    });
  };

  return (
    <div className={classNames("flex", "flex-row", "border", "border-black")}>
      <input onClick={handleChange} type="checkbox" value={number} />
      <div className={classNames("flex", "flex-col")}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
