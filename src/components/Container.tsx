import React from "react";
import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { InfoForm } from "./forms/InfoForm";
import { useForm } from "../utils/FormContext";
import { PlanForm } from "./forms/PlanForm";
import { AddOnForm } from "./forms/AddOnForm";

export const Container: React.FC = () => {
  const { formStep } = useForm();
  return (
    <main
      className={classNames(
        "flex",
        "flex-row",
        "border",
        "border-black",
        "w-1/2",
        "mx-auto",
        "px-6",
        "py-4",
      )}
    >
      <ProgressBar />
      <article className={classNames("flex", "flex-col")}>
        <AddOnForm />
      </article>
    </main>
  );
};
