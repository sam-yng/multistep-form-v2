import classNames from "classnames";
import React from "react";
import { Container } from "./components/Container";
import "../src/index.css";

export const App: React.FC = () => {
  return (
    <main className={classNames("h-screen", "items-center", "flex", "bg-alb")}>
      <Container />
    </main>
  );
};
