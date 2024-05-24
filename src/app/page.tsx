// src/app/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "../components/Login";
import Logout from "../components/Logout";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <p>Olá {session.user?.name}</p>
        <p>email: {session.user?.email}</p>
        <Logout />
      </div>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
