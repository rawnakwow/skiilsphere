import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export function useProfile() {
  const { user, session } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const updateProfile = async (name, photoURL) => {
    setIsLoading(true);
    try {
      const { data, error } = await authClient.updateUser({
        name,
        image: photoURL,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile.");
        return { success: false, error };
      } else {
        toast.success("Profile updated successfully!");
        router.refresh();
        return { success: true, data };
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      return { success: false, error: err };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    session,
    isLoading,
    updateProfile,
  };
}
