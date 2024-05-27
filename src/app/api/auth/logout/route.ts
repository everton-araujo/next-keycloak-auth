import { getServerSession } from "next-auth";
import { authOptions } from "../[...nextauth]/route";
import { getIdToken } from "@/utils/sessionTokenAccessor";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (session) {
    const idToken = await getIdToken();
    console.log({ idToken });

    const url = `${
      process.env.KEYCLOAK_END_SESSION_URL
    }?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL
    )}`;

    try {
      const res = await fetch(url, { method: "GET" });
    } catch (error) {
      console.error(error);

      return new Response({ status: 500 });
    }
  }
}
