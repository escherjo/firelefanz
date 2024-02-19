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
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px'
      // => @media (min-width: 1024px) { ... }

      // xl: '1280px'
      // => @media (min-width: 1280px) { ... }
      //
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
