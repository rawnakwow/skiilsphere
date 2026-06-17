"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message || "Signup failed");
      return;
    }

    toast.success("Account created successfully!");
    router.push("/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <form
        onSubmit={handleSignup}
        className="w-full max-w-md border p-6 rounded-xl shadow"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Sign Up
        </h1>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          name="photo"
          placeholder="Photo URL"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 mb-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded"
        >
          Create Account
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600">
            Sign In
          </a>
        </p>
      </form>

    </div>
  );
}