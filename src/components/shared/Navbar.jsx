"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = null; // replace later with auth user

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600"
          >
            SkillSphere
          </Link>

          <div className="hidden md:flex gap-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/my-profile">My Profile</Link>

            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-4 py-2 border rounded"
                >
                  Register
                </Link>
              </>
            ) : (
              <button className="px-4 py-2 bg-red-500 text-white rounded">
                Logout
              </button>
            )}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/my-profile">My Profile</Link>

            <Link
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded text-center"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="px-4 py-2 border rounded text-center"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}