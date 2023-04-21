/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;