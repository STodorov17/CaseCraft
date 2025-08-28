import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  // 1) Игнорирай генерирани и билд директории
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**",
      "out/**",
      "src/generated/**",       // <- Prisma client/wasm и т.н.
    ],
  },

  // 2) Базови Next + TS правила
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3) Общи правила за нашите TS/TSX файлове
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-require-imports": "off",
      "@next/next/no-img-element": "off",
    },
  },

  // 4) Допълнително (колан и тиранти): ако все пак ESLint стигне до generated
  {
    files: ["src/generated/**/*.{js,ts,tsx}"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
];
