"use client";

import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";
import { useState } from "react";

const loading = false;

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Log in with your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-pink-500 focus:ring focus:outline-none focus:ring-pink-100"
              placeholder="Enter a strong password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-pink-600 py-2 font-semibold text-white transition-all hover:bg-pink-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-pink-600 hover:text-pink-700"
          >
            SignUp here
          </Link>
        </p>

        {/* Social Login*/}
        <SocialLogin />
      </div>
    </section>
  );
};

export default SignIn;
