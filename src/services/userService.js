import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

export async function createUser(userData) {
  await dbConnect();

  const existingUser = await User.findOne({
    email: userData.email,
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create(userData);
  return user;
}

export async function getUserByEmail(email) {
  await dbConnect();

  const user = await User.findOne({ email });
  return user;
}

export async function getUserById(id) {
  await dbConnect();

  const user = await User.findById(id);
  return user;
}

export async function updateUser(id, updateData) {
  await dbConnect();

  const user = await User.findByIdAndUpdate(
    id,
    updateData,
    { new: true }
  );

  return user;
}

export async function deleteUser(id) {
  await dbConnect();

  const user = await User.findByIdAndDelete(id);
  return user;
}