import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dotenv from "dotenv";



const client = new MongoClient(process.env.MONGODB_URI);
export const auth = betterAuth({
 database: mongodbAdapter(db, {client}),
  emailAndPassword: {
    enabled: true,
  }});