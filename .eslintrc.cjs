/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["*.cjs", "*.js", "node_modules", "dist"],
  rules: {
    eqeqeq: "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "warn",
    "require-await": "warn",
    "no-var": "error",
  },
};
