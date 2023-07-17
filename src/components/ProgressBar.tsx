import classNames from "classnames";
import React from "react";

export const ProgressBar: React.FC = () => {
  return (
    <nav className={classNames("flex", "flex-col")}>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </nav>
  );
};
