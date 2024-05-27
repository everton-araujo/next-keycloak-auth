import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { jwtDecode } from "jwt-decode";
import { decrypt, encrypt } from "@/utils/encryption";

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  callbacks: {
    async jwt({ token, account }) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);

      if (account) {
        // account is only available the first time this callback is called on a new session
        token.decoded = jwtDecode(account.access_token);
        token.accessToken = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;

        return token;
      }

      if (nowTimeStamp < token.expires_at) {
        return token;
      }

      console.log("Token has expired. Will refresh...");
      // TODO
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.access_token = token.accessToken;
      session.id_token = token.id_token;
      session.roles = token.decoded.realm_access.roles;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
