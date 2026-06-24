"use client";

import { Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

import { useSearchParams } from "next/navigation";

export default function GoogleLogin() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirect || "/",
      });
    } catch (err) {
      toast.error("Google login failed or is not configured.");
    }
  };

  return (
    <Button 
      variant="bordered" 
      className="w-full font-medium border-2" 
      size="lg" 
      onClick={handleGoogleLogin}
      startContent={<FaGoogle className="text-danger" />}
    >
      Continue with Google
    </Button>
  );
}
