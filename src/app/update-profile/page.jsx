"use client";

import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
// FIXED: Removed non-existent CardBody and CardHeader from imports
import { Card, Button } from "@heroui/react";
// FIXED: Imported buttonVariants to style a standard Next.js Link cleanly
import { buttonVariants } from "@heroui/styles";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import ProtectedRoute from "@/components/shared/ProtectedRoute";

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            
            {/* FIXED: Replaced polymorphic <Button as={Link}> with native Next.js <Link> styled via buttonVariants */}
            <Link 
              href="/my-profile" 
              className={buttonVariants({ 
                variant: "light", 
                className: "mb-6 font-medium text-default-500 hover:text-foreground inline-flex items-center gap-2" 
              })}
            >
              <FaArrowLeft />
              Back to Profile
            </Link>

            <Card className="shadow-lg border border-divider">
              {/* FIXED: Updated to use compound sub-component Card.Header */}
              <Card.Header className="flex flex-col gap-1 p-8 bg-content1 rounded-t-xl border-b border-divider">
                <h1 className="text-3xl font-bold">Update Profile</h1>
                <p className="text-default-500">Change your account information below.</p>
              </Card.Header>
              
              {/* FIXED: Updated to use compound sub-component Card.Body */}
              <Card.Body className="p-8">
                {session && (
                  <UpdateProfileForm 
                    initialName={session.user.name} 
                    initialPhotoURL={session.user.image} 
                  />
                )}
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
