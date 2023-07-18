import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

type AddOnProps = {
  name: string;
  description: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const AddOn: React.FC<AddOnProps> = ({
  name,
  description,
  onChange,
}: AddOnProps) => {
  return (
    <div className={classNames("flex", "flex-row", "border", "border-black")}>
      <input type="checkbox" onChange={onChange} value={name} name={name} />
      <div className={classNames("flex", "flex-col")}>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};
