"use client";

import { createContext } from "react";
import { Toaster } from "react-hot-toast";

export const ToastContext = createContext();

export default function ToastProvider({ children }) {
  return (
    <ToastContext.Provider value={{}}>
      {children}
      <Toaster position="top-right" />
    </ToastContext.Provider>
  );
}