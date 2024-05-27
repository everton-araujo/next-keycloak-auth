"use client";

import { signIn, signOut, useSession } from "next-auth/react";

async function keycloakSessionLogOut() {
  try {
    await fetch("/api/auth/logout", { method: "GET" });
  } catch (error) {
    console.error(error);
  }
}

export default function AuthStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="my-3 text-white">Loading...</div>;
  } else if (session) {
    return (
      <div className="flex justify-between my-3">
        <div>
          <p className="text-yellow-100">
            Olá, <span>{session?.user?.name}</span>
          </p>
          <p>
            <span className="text-yellow-100">{session?.user?.email}</span>
          </p>
        </div>

        <button
          className="bg-blue-900 font-bold text-white py-1 px-2 rounded border border-gray-50"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex my-3 justify-between items-center">
      <p className="text-gray-400 text-sm">Não logado</p>

      <button
        className="bg-blue-900 font-bold text-white py-1 px-2 rounded border border-gray-50"
        onClick={() => signIn("keycloak")}
      >
        Login
      </button>
    </div>
  );
}
