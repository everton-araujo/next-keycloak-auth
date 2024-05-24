// types/node-env.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    KEYCLOAK_CLIENT_ID: string;
    KEYCLOAK_CLIENT_SECRET: string;
    KEYCLOAK_ISSUER: string;
    NEXT_PUBLIC_KEYCLOAK_CLIENT_ID: string;
    NEXT_PUBLIC_KEYCLOAK_URL: string;
    NEXT_PUBLIC_KEYCLOAK_REALM: string;
    NEXTAUTH_URL: string;
  }
}
