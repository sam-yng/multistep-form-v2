import React from "react";
import classNames from "classnames";

type FormHeaderProps = {
  title: string;
  instructions: string;
};

export const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  instructions,
}: FormHeaderProps) => {
  return (
    <article className={classNames("flex", "flex-col", "mt-4")}>
      <h1 className={classNames("font-bold", "text-3xl", "mb-2")}>{title}</h1>
      <p
        className={classNames(
          "font-regular",
          "text-coolgray",
          "text-lg",
          "mb-2",
        )}
      >
        {instructions}
      </p>
    </article>
  );
};
