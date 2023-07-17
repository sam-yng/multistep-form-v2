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
    <article className={classNames("flex", "flex-col")}>
      <h1>{title}</h1>
      <p>{instructions}</p>
    </article>
  );
};
