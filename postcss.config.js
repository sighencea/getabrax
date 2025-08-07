// postcss.config.js
const isTailwindV4 = Boolean(require('@tailwindcss/postcss'));

module.exports = {
  plugins: {
    ...(isTailwindV4 ? { '@tailwindcss/postcss': {} } : { tailwindcss: {} }),
    autoprefixer: {},
  },
};

