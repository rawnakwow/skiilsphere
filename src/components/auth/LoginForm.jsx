"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
// 1. Core HeroUI components updated to v3 specifications (standalone Input + parent Form)
import { Form, Input, Button } from "@heroui/react";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";
import GoogleLogin from "./GoogleLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  // 2. The missing handleLogin function that resolves the ReferenceError
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        toast.error(error.message || "Failed to sign in. Please check your credentials.");
      } else {
        toast.success("Successfully logged in!");
        router.push(redirect || "/");
        router.refresh();
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 3. Changed lowercase <form> to HeroUI v3's <Form> component wrapper */}
      <Form onSubmit={handleLogin} className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Email <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startContent={<FaEnvelope className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Password <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startContent={<FaLock className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>

        <Button 
          type="submit" 
          color="primary" 
          size="lg" 
          className="font-bold mt-2 shadow-lg shadow-primary/30 w-full" 
          isLoading={isLoading}
        >
          Sign In
        </Button>
      </Form>

      {/* 4. Native horizontal separators replacing defunct Divider elements */}
      <div className="flex items-center gap-4 my-6 w-full">
        <hr className="flex-1 border-t border-divider opacity-50" />
        <p className="text-default-500 text-sm font-medium shrink-0">OR</p>
        <hr className="flex-1 border-t border-divider opacity-50" />
      </div>

      <GoogleLogin />

      <p className="text-center text-sm text-default-500 mt-6">
        Do not have an account?{" "}
        <Link href={redirect ? `/signup?redirect=${encodeURIComponent(redirect)}` : "/signup"} className="text-primary font-semibold hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
}
