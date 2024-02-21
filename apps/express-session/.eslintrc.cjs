/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: { node: true },
  extends: ["../../.eslintrc.cjs", "plugin:prettier/recommended"],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
};
