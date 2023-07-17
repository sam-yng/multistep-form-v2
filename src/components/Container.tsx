import React from "react";
import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { InfoForm } from "./forms/InfoForm";

export const Container: React.FC = () => {
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
        {/* {FormStep === 1
					? ""
					: FormStep === 2
					? ""
					: FormStep === 3
					? ""
					: ""} */}
        <InfoForm />
      </article>
    </main>
  );
};
