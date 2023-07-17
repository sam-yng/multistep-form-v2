import React from "react";
import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { InfoForm } from "./forms/InfoForm";

export const Container: React.FC = () => {
  return (
    <main className={classNames("flex", "flex-row")}>
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
