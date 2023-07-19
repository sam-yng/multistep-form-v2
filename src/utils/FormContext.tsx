import React, { createContext, useContext, useMemo, useState } from "react";

export type FormContextType = {
  formStep: number;
  setFormStep: (formStep: number) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formStep, setFormStep] = useState<number>(1);

  const value = useMemo(
    () => ({
      formStep,
      setFormStep,
    }),
    [formStep, setFormStep],
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useFormContext = (): FormContextType => {
  const value = useContext(FormContext);
  if (!value) {
    throw new Error("useForm can only be called from within a FormProvider");
  }
  return value;
};
