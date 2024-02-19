/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      blue: '#3D79BD',
      green: '#00A55F',
      pink: '#EF97DB',
      white: '#FFFFFF',
      black: '#000000'
    },

    extend: {
      fontFamily: {
        heading: ['Lemans', 'sans-serif'],
        sans: ['DMSans', 'sans-serif']
      }
    }
  },
  plugins: []
};
