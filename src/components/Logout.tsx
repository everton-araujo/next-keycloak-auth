"use client";
import { signOut } from "next-auth/react";

async function keycloakSessionLogOut() {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
}

export default function Logout() {
  return (
    <button
      onClick={() => {
        keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
      }}
    >
      Signout of keycloak
    </button>
  );
}
