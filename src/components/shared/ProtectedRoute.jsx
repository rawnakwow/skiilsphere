"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Loader from "./Loader";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      const currentPath = window.location.pathname + window.location.search;
      router.push(`/signin?redirect=${encodeURIComponent(currentPath)}`);
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return <Loader />;
  }

  return <>{children}</>;
}
