/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#031d33',
        lightBg: 'white',
        darkText: 'white',
        lightText: '#031d33',
        darkBorder: 'white',
        lightBorder: '#031d33',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: 'white',
          secondary: '#143454',
          accent: '#519BFF',
          neutral: '#dfecf8',
          info: '#e7f2fa',
          success: 'transparent',
          'base-100': '',
        },
      },

      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          '.btn-primary': {
            'background-color': 'black',
            'border-color': '#519BFF',
          },
          primary: '#031d33',
          secondary: 'white',
          accent: ' #040f1b',
          neutral: '#040f1b',
          success: '#519BFF',
        },
      },
    ],
  },
};
