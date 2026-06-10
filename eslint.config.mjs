import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // This rule is very noisy in JSX for common apostrophes like "Let's".
      // It provides little value in modern React/Next.js.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
