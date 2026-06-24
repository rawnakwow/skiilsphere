import { auth } from "@/lib/auth";
// FIXED: Imported the correct framework engine path and handler function
import { toNextJsHandler } from "better-auth/next-js";

// FIXED: Destructure GET and POST directly from the handler utility
export const { GET, POST } = toNextJsHandler(auth);
