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
        "mx-auto",
        "bg-white",
        "rounded-xl",
        "h-[60vh]",
        "w-[60vw]",
      )}
    >
      <ProgressBar />
      <article
        className={classNames(
          "flex",
          "flex-col",
          "py-6",
          "px-12",
          "bg-white",
          "w-full",
        )}
      >
        <Form />
      </article>
    </main>
  );
};
