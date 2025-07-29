import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL:
    process.env.NEXT_PUBLIC_URL ||
    "https://fantastic-robot-jgp5qgr6pr4hj77v-3000.app.github.dev",
});
