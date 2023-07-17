import classNames from "classnames";
import React from "react";

export const ProgressBar: React.FC = () => {
  return (
    <nav className={classNames("flex", "flex-col", "w-36")}>
      <ul className={classNames("space-y-6")}>
        <li className={classNames("flex", "flex-row")}>
          1
          <span className={classNames("flex", "flex-col", "ml-4")}>
            <h1>STEP 1</h1>
            <h1>YOUR INFO</h1>
          </span>
        </li>
        <li className={classNames("flex", "flex-row")}>
          2
          <span className={classNames("flex", "flex-col", "ml-4")}>
            <h1>STEP 2</h1>
            <h1>SELECT PLAN</h1>
          </span>
        </li>
        <li className={classNames("flex", "flex-row")}>
          3
          <span className={classNames("flex", "flex-col", "ml-4")}>
            <h1>STEP 3</h1>
            <h1>ADD-ONS</h1>
          </span>
        </li>
        <li className={classNames("flex", "flex-row")}>
          4
          <span className={classNames("flex", "flex-col", "ml-4")}>
            <h1>STEP 4</h1>
            <h1>SUMMARY</h1>
          </span>
        </li>
      </ul>
    </nav>
  );
};
