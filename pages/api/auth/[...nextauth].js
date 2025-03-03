import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../util/mongo";
import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcryptjs";
dbConnect();

export default NextAuth({
  /*  adapter: MongoDBAdapter(clientPromise), */
  providers: [
    GithubProvider({
      clientId: "gth1d" ,
      clientSecret: "fhfdddggfd",
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You haven't registered yet!");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database: "mongodb+srv://mamashibigbro:TpgmEbJ4jYMwjiNF@foodstore.nh3xl.mongodb.net/?retryWrites=true&w=majority&appName=foodstore&directConnection=true",
  secret: "secret",
});

const signInUser = async ({ user, password }) => {
  const isMAtch = await bcrypt.compare(password, user.password);
  if (!isMAtch) {
    throw new Error("Incorrect password!");
  }
  return user;
};
