import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: [
      "tests/**/*.test.ts",
      "packages/*/src/**/*.test.ts",
      "packages/*/src/**/*.test.tsx",
    ],
    exclude: ["tests/e2e/**"],
  },
});
