const shardTWConfig = require('./shared/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['packages/renderer/src/**/*.{vue,js,ts,jsx,tsx}'],
  ...shardTWConfig,
};

