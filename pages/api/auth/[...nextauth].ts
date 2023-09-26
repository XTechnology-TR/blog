import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // !!! Should be stored in .env file.
    GoogleProvider({
      clientId: ``,
      clientSecret: ``,
    }),
  ],
  secret: ``,
};
export default NextAuth(authOptions);
