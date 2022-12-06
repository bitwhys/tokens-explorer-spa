/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/components/**/*.{vue,ts,js}', 'src/views/**/*.{vue,ts,js}', 'src/App.vue', 'index.html'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
