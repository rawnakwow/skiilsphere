"use client";

import { createContext, useContext, useCallback } from "react";
import { toast } from "react-toastify";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const showSuccess = useCallback((msg) => toast.success(msg), []);
  const showError   = useCallback((msg) => toast.error(msg),   []);
  const showInfo    = useCallback((msg) => toast.info(msg),    []);
  const showWarning = useCallback((msg) => toast.warning(msg), []);

  return (
    <ToastContext.Provider value={{ showSuccess, showError, showInfo, showWarning }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
