import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.@(ts|tsx)"],
} satisfies Config;

export default config;
