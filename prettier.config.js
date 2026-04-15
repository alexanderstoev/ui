/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 100,
  trailingComma: "es5",
  endOfLine: "lf", // Ensure Linux line endings
  importOrder: ["^@/server/(.*)$", "^@/components/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
};

export default config;
