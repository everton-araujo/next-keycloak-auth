import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { decrypt } from "./encryption";

export async function getAccessToken() {
  const session = await getServerSession(authOptions);

  if (session) {
    return decrypt(session.access_token);
  }

  return null;
}

export async function getIdToken() {
  const session = await getServerSession(authOptions);

  if (session) {
    return session.id_token;
    // return decrypt(session.id_token);
  }

  return null;
}
