/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'var(--color-dark)',
        cream: 'var(--color-cream)',
        gray: 'var(--color-gray)',
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      maxWidth: {
        'retina': '1600px',
      },
      transitionDuration: {
        '400': '400ms',
        '800': '800ms',
      },
      height: {
        'header': '80px',
        'screen-minus-header': 'calc(100vh - 160px)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-h1': {
          '@apply font-cormorant-sc text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium': {},
        },
        '.text-h2': {
          '@apply font-cormorant-sc text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium': {},
        },
        '.text-h3': {
          '@apply font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light': {},
        },
        '.text-h4': {
          '@apply font-cormorant text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light': {},
        },
        '.text-body': {
          '@apply font-cormorant text-base sm:text-lg md:text-xl lg:text-3xl font-light': {},
        },
        '.text-caption': {
          '@apply font-cormorant text-sm sm:text-base md:text-lg font-light': {},
        }
      })
    }
  ],
  corePlugins: {
    container: false
  },
}