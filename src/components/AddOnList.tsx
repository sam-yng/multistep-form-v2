import React from "react";

type AddOnListProps = {
  conOne: boolean;
  conTwo: boolean;
  yearPrice: string;
  monthPrice: string;
  name: string;
};

export const AddOnList: React.FC<AddOnListProps> = ({
  conOne,
  conTwo,
  yearPrice,
  monthPrice,
  name,
}: AddOnListProps) => {
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
