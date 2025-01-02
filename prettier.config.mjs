// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "all",
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  tabWidth: 2,
  semi: true,
};

export default config;
