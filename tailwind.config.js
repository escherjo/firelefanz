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
      },

      keyframes: {
        swing: {
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        swingEven: {
          '0%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(10deg)' }
        },
        walk: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite ',
        swingEven: 'swingEven 5s ease-in-out infinite ',
        walk: 'walk 1s ease-in-out infinite '
      }
    }
  },
  plugins: []
};
