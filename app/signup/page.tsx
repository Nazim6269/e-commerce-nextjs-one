"use client";

import { signUpAction } from "@/actions/formAction";
import Link from "next/link";
import { useActionState } from "react";

export type SignUpStateProps = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  success: boolean;
  message: string;
};

//form initial state
const initialFormState: SignUpStateProps = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  success: false,
  message: "",
};

//component
const SignUpPage: React.FC<{}> = () => {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialFormState
  );

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Create an Account
        </h2>

        <form action={formAction} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring focus:outline-none focus:ring-pink-100"
              placeholder="Enter your name"
            />
            {state?.success === false && (
              <p className="text-red-500 text-sm">{state.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring focus:outline-none focus:ring-pink-100"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring focus:outline-none focus:ring-pink-100"
              placeholder="Enter a strong password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring focus:outline-none focus:ring-pink-100"
              placeholder="Re-enter password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-pink-600 py-2 font-semibold text-white transition-all hover:bg-pink-700 disabled:opacity-60"
          >
            {isPending ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-pink-600 hover:text-pink-700"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUpPage;
