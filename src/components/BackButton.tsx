import classNames from "classnames";
import React from "react";

type BackButtonProps = {
  handleClick: () => void;
};

export const BackButton: React.FC<BackButtonProps> = ({
  handleClick,
}: BackButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={classNames("text-coolgray", "font-medium")}
    >
      Go Back
    </button>
  );
};
