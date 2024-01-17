declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_TRPC_API_URL: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    NEXTAUTH_SECRET: string;

    NODEMAILER_PW: string;
    NODEMAILER_EMAIL: string;
  }
}
