import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  // 1. check user exists
  const user = await User.findOne({ email });

  if (!user) {
    return Response.json(
      { message: "User not found" },
      { status: 404 }
    );
  }

  // 2. check password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return Response.json(
      { message: "Invalid password" },
      { status: 400 }
    );
  }

  // 3. create token
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // 4. send response
  return Response.json({
    message: "Login successful",
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      photo: user.photo,
    },
  });
}