"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Avatar } from "@heroui/react";
import Link from "next/link";
import { FaUser, FaImage } from "react-icons/fa";
import { useProfile } from "@/hooks/useProfile";

export default function UpdateProfileForm({ initialName, initialPhotoURL }) {
  const router = useRouter();
  const [name, setName] = useState(initialName || "");
  const [photoURL, setPhotoURL] = useState(initialPhotoURL || "");
  const { updateProfile, isLoading } = useProfile();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await updateProfile(name, photoURL);
    if (res.success) {
      router.push("/my-profile");
    }
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <Avatar 
          src={photoURL || "https://ui-avatars.com/api/?name=" + encodeURIComponent(name || "User")} 
          name={name} 
          className="w-32 h-32 text-4xl" 
          isBordered 
          color="primary"
        />
      </div>

      <form onSubmit={handleUpdate} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700 flex gap-1 items-center">
            Full Name <span className="text-danger">*</span>
          </label>
          <Input
            isRequired
            placeholder="Enter your name"
            type="text"
            variant="bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            startContent={<FaUser className="text-default-400 shrink-0" />}
            classNames={{ inputWrapper: "border-2 focus-within:border-primary" }}
          />
        </div>
        
        <div className="flex flex-col gap-1.5 text-left w-full">
          <label className="text-sm font-semibold text-default-700">
            Photo URL
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
        
        <div className="flex gap-4 mt-4">
          <Button 
            type="submit" 
            color="primary" 
            size="lg" 
            className="font-bold flex-1 shadow-lg shadow-primary/30" 
            isLoading={isLoading}
          >
            Save Changes
          </Button>
          <Link href="/my-profile" className="flex-1">
            <Button 
              as="span"
              color="default" 
              variant="bordered"
              size="lg" 
              className="font-bold border-2 w-full text-center block" 
            >
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </>
  );
}
