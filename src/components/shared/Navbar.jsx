"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";

import { useState } from "react";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = null;

  return (
    <Navbar
      isBordered
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={
            isMenuOpen ? "Close Menu" : "Open Menu"
          }
          className="sm:hidden"
        />

        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center gap-2"
          >
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="logo"
            />

            <h1 className="font-bold text-xl">
              SkillSphere
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-6"
        justify="center"
      >
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/my-profile">
          My Profile
        </Link>
      </NavbarContent>

      <NavbarContent justify="end">
        {!user ? (
          <>
            <Link href="/login">
              <Button color="primary">
                Login
              </Button>
            </Link>

            <Link href="/register">
              <Button variant="bordered">
                Register
              </Button>
            </Link>
          </>
        ) : (
          <Button color="danger">
            Logout
          </Button>
        )}
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="/">Home</Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link href="/courses">Courses</Link>
        </NavbarMenuItem>

        <NavbarMenuItem>
          <Link href="/my-profile">
            My Profile
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}