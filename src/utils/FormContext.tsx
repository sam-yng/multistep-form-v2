import React, { createContext, useContext, useMemo, useState } from "react";

interface InfoResults {
  name: string;
  email: string;
  phone: string;
}

export type Billing = "monthly" | "yearly";

export enum PlanChoice {
  arcade,
  advanced,
  pro,
}

export interface AddOns {
  1: boolean;
  2: boolean;
  3: boolean;
}

export type FormContextType = {
  formStep: number;
  setFormStep: (formStep: number) => void;
  info: InfoResults;
  setInfo: (info: InfoResults) => void;
  billing: Billing;
  setBilling: (billing: Billing) => void;
  plan: PlanChoice;
  setPlan: (plan: PlanChoice) => void;
  addOns: AddOns;
  setAddOns: (addOns: AddOns) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formStep, setFormStep] = useState<number>(1);
  const [info, setInfo] = useState<InfoResults>({
    name: "",
    email: "",
    phone: "",
  });
  const [billing, setBilling] = useState<Billing>("monthly");
  const [plan, setPlan] = useState<PlanChoice>(1);
  const [addOns, setAddOns] = useState<AddOns>({
    1: false,
    2: false,
    3: false,
  });

  const value = useMemo(
    () => ({
      formStep,
      setFormStep,
      info,
      setInfo,
      billing,
      setBilling,
      plan,
      setPlan,
      addOns,
      setAddOns,
    }),
    [
      formStep,
      setFormStep,
      info,
      setInfo,
      billing,
      setBilling,
      plan,
      setPlan,
      addOns,
      setAddOns,
    ],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = (): FormContextType => {
  const value = useContext(FormContext);
  if (!value) {
    throw new Error("useForm can only be called from within a FormProvider");
  }
  return value;
};
