import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

type InputProps = {
  label: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: string | undefined;
  touched: boolean | undefined;
  value: string;
  name: string;
  type?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  error,
  touched,
  value,
  name,
  type,
}: InputProps) => {
  return (
    <div className={classNames("flex", "flex-col")}>
      <div className={classNames("flex", "flex-row")}>
        <label htmlFor="name">{label}</label>
        {error && touched ? <h1 className="ml-auto">{error}</h1> : null}
      </div>
      {
        <input
          onChange={onChange}
          value={value}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
        />
      }
    </div>
  );
};
