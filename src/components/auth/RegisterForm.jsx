"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
// 1. Removed Divider from the HeroUI imports
import { Input, Button } from "@heroui/react";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
import Link from "next/link";
import GoogleLogin from "./GoogleLogin";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  
  
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // FIX: Separated the debug log from the input validation values cleanly
    console.log("Submitting values:", { email, name, password, photoURL });
    
    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        image: photoURL || "https://ui-avatars.com" + encodeURIComponent(name),
      });

      if (error) {
        toast.error(error.message || "Failed to register. Please try again.");
      } else {
        toast.success("Successfully registered! Please sign in.");
        router.push(redirect ? `/signin?redirect=${encodeURIComponent(redirect)}` : "/signin");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Full Name <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="John Doe"
            type="text"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            startContent={<FaUser className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Email <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="john@example.com"
            type="email"
            variant="bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startContent={<FaEnvelope className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700">
            Photo URL (Optional)
          </label>
          <Input
            placeholder="https://example.com/photo.jpg"
            type="url"
            variant="bordered"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            startContent={<FaImage className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>

        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Password <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="Choose a strong password"
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
          Sign Up
        </Button>
      </form>

      {/* 2. Replaced the old <Divider /> tags with clean, semantic, responsive native <hr /> elements */}
      <div className="flex items-center gap-4 my-6 w-full">
        <hr className="flex-1 border-t border-divider opacity-50" />
        <p className="text-default-500 text-sm font-medium shrink-0">OR</p>
        <hr className="flex-1 border-t border-divider opacity-50" />
      </div>

      <GoogleLogin />

      <p className="text-center text-sm text-default-500 mt-6">
        Already have an account?{" "}
        <Link href={redirect ? `/signin?redirect=${encodeURIComponent(redirect)}` : "/signin"} className="text-primary font-semibold hover:underline">
          Log in
        </Link>
      </p>
    </>
  );
}
