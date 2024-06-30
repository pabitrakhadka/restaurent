import server from "@/axois/server";
import axios from "axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/db/db.config";
export default NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "UserCredentials",
      async authorize(credentials, req) {
        try {
          const { email, password, loginType } = credentials;
          const url = process.env.AUTH_URL;

          let endpoint;
          if (loginType === "user") {
            endpoint = `${url}/userlogin`;
          } else if (loginType === "admin") {
            endpoint = `${url}/adminlogin`;
          } else if (loginType === "superadmin") {
            endpoint = `${url}/superadminlogin`;
          } else {
            throw new Error("Invalid login type");
          }

          const res = await server.post(endpoint, { email, password });
          console.log("user logon =", email, password);
          if (res.status === 200) {
            const user = res.data;
            return {
              name: user.name,
              email: user.id,
              image: loginType,
              token: user.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      try {
        if (credentials.email && credentials.password) {
          return true;
        } else {
          let existingUser = await prisma.user.findFirst({
            where: { user_email: user.email },
          });

          if (!existingUser) {

            existingUser = await prisma.user.create({
              data: {
                user_email: user.email,
                user_name: user.name,
                user_token: account.accessToken,
              },
            });
          }
          // Add user_id and user_name to the user object
          user.email = existingUser.user_id;
          user.name = existingUser.user_name;
          user.image = "user";
        }


      } catch (error) {
        console.error("Error saving user to the database", error);
        return false; // Return false if there was an error
      }
      return true; // Must return true to indicate successful sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        console.log("JwT login=", user);
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.image = token.image;

      try {
        const res = await server.get(`${process.env.GoogleEndPoint}?id=${token.email}`);
        if (res.data.status === 200) {
          const user = res.data;
          session.user.name = user.user_name;
          session.user.email = user.user_id;
          session.user.image = "user";
        }
      } catch (error) {
        console.error("Error in session callback:", error);
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
