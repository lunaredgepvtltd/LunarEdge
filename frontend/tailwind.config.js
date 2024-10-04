/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Enable dark mode based on user's device preference
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        service: '0 3px 8px rgba(0, 0, 0, 0.24)',
      },
      animation: {
        'spin-slow': 'spin 80s linear infinite', // 8 seconds for slow spin
      },
      textShadow: {
        'default': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.7)',
        'xl': '4px 4px 8px rgba(0, 0, 0, 0.8)',
        'md-red': '2px 2px 4px rgba(255, 0, 0, 0.5)',
        'sm-white': '1px 1px 2px rgba(255, 255, 255, 0.7)', 
        'md-white': '2px 2px 4px rgba(255, 255, 255, 0.7)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #fff7ad, #ffa9f9)',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme, e }) {
      // Text Shadow Utilities
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.keys(textShadow).map(key => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadow[key],
          },
        };
      });
      addUtilities(textShadowUtilities, ['responsive', 'hover']);

      // Grayscale Utilities
      addUtilities({
        '.grayscale-100': {
          filter: 'grayscale(100%)',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
