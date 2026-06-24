"use client";

import AuthProviderWrapper from "./AuthProvider";
import { ToastProvider } from "@/context/ToastContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
  return (
    <AuthProviderWrapper>
      <ToastProvider>
        {children}
        <ToastContainer position="top-right" theme="dark" />
      </ToastProvider>
    </AuthProviderWrapper>
  );
}
