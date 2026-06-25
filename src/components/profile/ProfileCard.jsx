"use client";

import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { FaUserEdit, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProfileCard({ user }) {
  const joinDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }) : "Recent Member";

  return (
    <Card className="w-full shadow-xl border border-divider bg-background/60 backdrop-blur-md">
      <Card.Header className="flex flex-col items-center justify-center pt-8 pb-4 text-center">
        <div className="relative border-4 border-primary rounded-full p-1 mb-4 shadow-lg">
          <Image
            src={user?.image || `https://ui-avatars.com{encodeURIComponent(user?.name || "User")}&background=6c63ff&color=fff`}
            alt={user?.name || "User Avatar"}
            width={96} 
            height={96}
            className="w-24 h-24 rounded-full object-cover"
            unoptimized
          />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">{user?.name || "SkillSphere Learner"}</h2>
        <p className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full mt-2 uppercase tracking-wider">
          Student Account
        </p>
      </Card.Header>

      <hr className="w-full border-t border-divider opacity-50" />

      <Card.Content className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-default-600 bg-content2/40 p-3 rounded-xl border border-divider/40">
          <FaEnvelope className="text-primary text-lg shrink-0" />
          <div className="truncate">
            <p className="text-default-400 text-xs font-medium">Email Address</p>
            <p className="text-sm font-semibold text-foreground truncate">{user?.email || "N/A"}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-default-600 bg-content2/40 p-3 rounded-xl border border-divider/40">
          <FaCalendarAlt className="text-secondary text-lg shrink-0" />
          <div>
            <p className="text-default-400 text-xs font-medium">Joined SkillSphere</p>
            <p className="text-sm font-semibold text-foreground">{joinDate}</p>
          </div>
        </div>

        <Button
          as={Link}
          href="/update-profile"
          color="primary"
          variant="solid"
          size="lg"
          className="w-full font-bold shadow-lg shadow-primary/20 mt-4"
          startContent={<FaUserEdit />}
        >
          Edit Profile Information
        </Button>
      </Card.Content>
    </Card>
  );
}
