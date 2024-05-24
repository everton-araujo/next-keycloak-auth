import { NextApiRequest, NextApiResponse } from "next";
import { getProviders } from "next-auth/react";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const providers = await getProviders();

  if (providers?.keycloak) {
    const signupUrl = `${
      process.env.KEYCLOAK_ISSUER
    }/protocol/openid-connect/registrations?client_id=${
      process.env.KEYCLOAK_CLIENT_ID
    }&response_type=code&scope=openid&redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL + "/api/auth/callback/keycloak"
    )}`;

    res.redirect(signupUrl);
  } else {
    res.status(500).json({ error: "Keycloak provider not configured" });
  }
}
