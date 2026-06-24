"use client";

import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
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
            <Button 
              as={Link} 
              href="/my-profile" 
              variant="light" 
              startContent={<FaArrowLeft />}
              className="mb-6 font-medium text-default-500 hover:text-foreground"
            >
              Back to Profile
            </Button>

            <Card className="shadow-lg border border-divider">
              <CardHeader className="flex flex-col gap-1 p-8 bg-content1 rounded-t-xl border-b border-divider">
                <h1 className="text-3xl font-bold">Update Profile</h1>
                <p className="text-default-500">Change your account information below.</p>
              </CardHeader>
              <CardBody className="p-8">
                {session && (
                  <UpdateProfileForm 
                    initialName={session.user.name} 
                    initialPhotoURL={session.user.image} 
                  />
                )}
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
