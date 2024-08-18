import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  {
    rules: {
      "react/react-in-jsx-scope": "off", // Desativa a necessidade do React no escopo para JSX
      "@typescript-eslint/no-require-imports": "off", // Desativa a regra no-require-imports
      "prettier/prettier": "error", // Adiciona o Prettier como uma regra do ESLint
    }
  }
];
