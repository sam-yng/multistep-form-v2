import React from "react";
import classNames from "classnames";
import { ProgressBar } from "./ProgressBar";
import { Form } from "./Form";

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
        <Form />
      </article>
    </main>
  );
};
