import React from "react";

type AddOnItemProps = {
  conOne: boolean;
  conTwo: boolean;
  yearPrice: string;
  monthPrice: string;
  name: string;
};

export const AddOnItem: React.FC<AddOnItemProps> = ({
  conOne,
  conTwo,
  yearPrice,
  monthPrice,
  name,
}: AddOnItemProps) => {
  return (
    <>
      {conOne ? (
        <li className="flex font-regular text-coolgray">
          {name}{" "}
          {conTwo ? (
            <p className="ml-auto">{yearPrice}</p>
          ) : (
            <p className="ml-auto">{monthPrice}</p>
          )}
        </li>
      ) : null}
    </>
  );
};
