import classNames from "classnames";
import React from "react";
import { useForm } from "../utils/FormContext";

type ProgressPointProps = {
  number: string;
  name: string;
};

const ProgressPoint = ({ number, name }: ProgressPointProps) => {
  const { formStep } = useForm();
  return (
    <li
      className={classNames(
        "flex",
        "flex-row",
        "items-center",
        "pt-2",
        "min-w-[30vw]",
      )}
    >
      <span
        className={classNames(
          "rounded-full",
          "border",
          "border-white",
          "px-3",
          "mr-4",
          "py-1",
          `${
            formStep.toString() === number ? "bg-alb text-navy" : "text-white"
          }`,
        )}
      >
        {number}
      </span>
      <span className={classNames("flex", "flex-col")}>
        <h1 className={classNames("text-lightgray", "text-sm")}>
          STEP {number}
        </h1>
        <h1 className={classNames("text-white", "font-medium")}>{name}</h1>
      </span>
    </li>
  );
};

export const ProgressBar: React.FC = () => {
  return (
    <nav
      className={classNames(
        "flex",
        "flex-col",
        "w-[15vw]",
        "nav",
        "pb-10",
        "px-4",
        "rounded-lg",
        "m-2",
      )}
    >
      <ul className={classNames("space-y-6", "mt-3")}>
        <ProgressPoint number="1" name="YOUR INFO" />
        <ProgressPoint number="2" name="SELECT PLAN" />
        <ProgressPoint number="3" name="ADD-ONS" />
        <ProgressPoint number="4" name="SUMMARY" />
      </ul>
    </nav>
  );
};
