// types/node-env.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    KEYCLOAK_CLIENT_ID: string;
    KEYCLOAK_CLIENT_SECRET: string;
    KEYCLOAK_ISSUER: string;
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    KEYCLOAK_END_SESSION_URL: string;
  }
}
