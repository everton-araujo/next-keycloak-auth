// types/next-auth.d.ts

import { DefaultSession, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

// Extending the Session type to include custom properties
declare module "next-auth" {
  interface Session {
    access_token: string;
    id_token: string;
    roles: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    id_token: string;
    decoded: {
      realm_access: {
        roles: string[];
      };
    };
    expires_at: number;
    refresh_token: string;
  }
}
