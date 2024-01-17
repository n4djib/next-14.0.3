import { getUser } from "@/lib/drizzle/users";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email_username: {},
        password: {},
        // password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await getUser(credentials?.email_username || "");

        console.log("---credentials:", { credentials });
        console.log("---user:", { user });

        if (user) {
          const passwordCorrect = await compare(
            credentials?.password || "",
            user?.password
          );

          if (passwordCorrect) {
            return {
              id: user.id,
              username: user.username,
              email: user.email,
              //   picture: "222",
              roles: ["admin", "writer"],
              active_role: "admin",
            } as any;
          }
        }
        return null;
      },
    }),
    //
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user, account, profile }) {
      // console.log("-1------in token callback:", { token, user });
      if (user) {
        token.roles = (user as any).roles;
        token.active_role = (user as any).active_role;
        token.username = (user as any).username;
      }
      return token;
    },

    async session({ session, token, user }) {
      // it runs when there is an Auth Provider
      // console.log("-2------in Zsession callback:", { session, token, user });
      return {
        ...session,
        user: {
          ...session.user,
          roles: token.roles,
          active_role: token.active_role,
          username: token.username,
        },
      };
    },

    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
  },

  pages: {},
  // pages: { signIn: "/auth/login" },

  events: {},
  debug: true,
};
