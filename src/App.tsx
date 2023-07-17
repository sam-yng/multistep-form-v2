import classNames from "classnames";
import React from "react";
import { Container } from "./components/Container";

export const App: React.FC = () => {
  return (
    <main className={classNames("h-screen", "items-center", "flex")}>
      <Container />
    </main>
  );
};
