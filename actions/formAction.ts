"use server";

import { signIn } from "@/auth";
import { registerToDB } from "@/lib/dbQuery";
export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const signUpAction = async (prevState: number, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  const userInfo = { name, email, password, confirmPassword };
  if (name.length < 3) {
    return {
      success: false,
      message: "Username must be minimum 3 letters",
    };
  }

  const res = await registerToDB(userInfo);
  if (!res) {
    return { success: false, message: "Failed to Sign up" };
  }

  return { success: true, message: "Successfully created account" };
};

export const loginAction = async (prevState: number, formData: FormData) => {
  const loginData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    redirect: false,
  };

  const res = await signIn("credentials", loginData);

  if (!res) {
    return { success: false, message: "Failed to loign" };
  } else {
    return { success: true, message: "Successfully login!!!" };
  }
};
