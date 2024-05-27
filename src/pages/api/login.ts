import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  const response = await fetch(
    `${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
        grant_type: "password",
        username,
        password,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    res.status(200).json(data);
  } else {
    res.status(response.status).json(data);
  }
}
