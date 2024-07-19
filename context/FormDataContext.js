"use client";

import { createContext, useState } from "react";

export const FormDataContext = createContext();

export const LaunchDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
