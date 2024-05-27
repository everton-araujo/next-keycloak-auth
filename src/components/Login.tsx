"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex gap-4">
      <button
        className="text-white border-2 p-2 rounded-md bg-gray-500"
        onClick={() => signIn("keycloak")}
      >
        Sign in with Keycloak
      </button>
      <button
        className="text-white border-2 p-2 rounded-md bg-gray-500"
        onClick={() => (window.location.href = "/api/signup")}
      >
        Sign up with Keycloak
      </button>
    </div>
  );
}
