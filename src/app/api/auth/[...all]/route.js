// src/app/api/auth/[...all]/route.js
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

// FIX: Destructure POST and GET directly from the handler payload object
export const { GET, POST } = toNextJsHandler(auth);
