import React from "react";
import classNames from "classnames";

type FieldProps = {
  input: React.ReactNode;
  errors?: React.ReactNode;
  label: string;
};

export const Field: React.FC<FieldProps> = ({
  input,
  label,
  errors,
}: FieldProps) => {
  return (
    <div className={classNames("flex", "flex-col")}>
      <div className={classNames("flex", "flex-row")}>
        <label
          className={classNames("text-denim", "mb-2", "font-regular")}
          htmlFor="name"
        >
          {label}
        </label>
        <p className="text-red ml-auto font-regular">{errors}</p>
      </div>
      {input}
    </div>
  );
};
