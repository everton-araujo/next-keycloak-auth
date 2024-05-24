"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <button onClick={() => signIn("keycloak")}>Sign in with Keycloak</button>
      <button onClick={() => (window.location.href = "/api/signup")}>
        Sign up with Keycloak
      </button>
    </>
  );
}
