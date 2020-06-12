declare namespace Express {
  export interface Request {
    user?: any;
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;

    DATABASE: string;
    DATABASE_LOCAL: string;
    DATABASE_PASSWORD: string;

    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;
    JWT_COOKIE_EXPIRES_IN: number;

    EMAIL_USERNAME: string;
    EMAIL_PASSWORD: string;
    EMAIL_HOST: string;
    EMAIL_PORT: number;

    EMAIL_FROM: string;
    EMAIL_PASSWORD: string;
    SENDGRID_USERNAME: string;
    SENDGRID_PASSWORD: string;
  }
}
