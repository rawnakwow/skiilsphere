"use client";

import { createContext, useContext } from "react";
import { authClient } from "@/lib/auth-client";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { data: session, isPending, error } = authClient.useSession();

  return (
    <AuthContext.Provider value={{ session, isPending, error, user: session?.user || null }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
