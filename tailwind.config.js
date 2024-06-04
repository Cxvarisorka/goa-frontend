/** @type {import('tailwindcss').Config} */
export default{
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-black': '#050906',
        'primary-green': '#3c8143',
        'primary': '#243c5a',
      },
    },
  },
  plugins: [],
}