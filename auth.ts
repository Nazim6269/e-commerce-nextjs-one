import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import client from "./lib/db";
import { findUserFromDB } from "./lib/dbQuery";
import {
  githubId,
  githubSecret,
  googleClientId,
  googleSecret,
  nextAuthSecret,
} from "./secret";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: MongoDBAdapter(client),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        name: { label: "name", type: "string", placeholder: "Test" },
        email: {
          label: "email",
          type: "string",
          placeholder: "test@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
        },
        confirmPassword: { label: "password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        if (credentials === null) return null;
        if (!credentials.email || !credentials.password) return null;

        try {
          const user = await findUserFromDB(credentials.email);
          if (user) {
            const isMatch = user.password === credentials.password;
            if (isMatch) {
              return user;
            } else {
              return { success: false, message: "User Not found" };
            }
          } else {
            return null;
          }
        } catch (error) {
          throw error;
        }
      },
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: githubId,
      clientSecret: githubSecret,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: nextAuthSecret,
});
