"use client";
import { useState } from "react";

export default function CustomLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    console.log(response)

    if (response.ok) {
      window.location.href = "/";
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        .container > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid black;
          padding: 16px;
          border-radius: 8px;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: end;
        }

        input {
          display: flex;
          padding: 0.5rem;
          margin-bottom: 1rem;
        }

        button {
          padding: 0.5rem 1rem;
          width: 50%;
        }
      `}</style>
    </div>
  );
}
