import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOD_CLIENT_ID,
      clientSecret: process.env.GOOD_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
});
