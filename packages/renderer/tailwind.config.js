/* eslint-disable no-undef */

const shardTWConfig = require('../../shared/tailwind');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  ...shardTWConfig,
};
