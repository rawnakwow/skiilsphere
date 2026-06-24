"use client";

import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import ProfileCard from "@/components/profile/ProfileCard";
import ProtectedRoute from "@/components/shared/ProtectedRoute";
import PageTitle from "@/components/shared/PageTitle";

export default function MyProfile() {
  const { data: session } = authClient.useSession();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-6">
          <PageTitle title="My Profile" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {session && <ProfileCard user={session.user} />}
          </motion.div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
