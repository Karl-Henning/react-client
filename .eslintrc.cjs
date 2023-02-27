/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier", // should always be last
  ],
  rules: {
    "react/prop-types": 0, // disable prop-types -> use e.g. TypeScript instead
    "react/react-in-jsx-scope": 0,
  },
  plugins: ["react", "import", "jsx-a11y", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module", // use import/export
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // environment variables e.g. fetch, __dirname, etc.
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    importParsers: {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
