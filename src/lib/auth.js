import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// 1. Instantiate the base connection object
const client = new MongoClient(process.env.MONGODB_URI || "");

// FIXED: Force Next.js server runtime to connect explicitly before processing auth requests
await client.connect();

// 2. Safely point to your active database workspace 
const db = client.db();

export const auth = betterAuth({
  // FIXED: Explicitly pass the top-level client parameter alongside the database pointer
  database: mongodbAdapter(db, {
    client: client
  }),
  
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false
  }
});
