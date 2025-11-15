import { User } from "@/actions/formAction";
import { userModel } from "@/models/userModel";
import { connectDB } from "@/services/connectDB";

//register user to database
export const registerToDB = async (userInfo: User) => {
  await connectDB();
  const newUser = await userModel.create(userInfo);

  const res = await newUser.save();
  if (!res) {
    return { success: false, message: "Failed to Create account" };
  }
  return { success: true, message: "Successfully  Created account" };
};

//searching user using email
export const findUserFromDB = async (email: string) => {
  try {
    return await userModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};
