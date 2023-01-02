/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'desktop-up': { min: '1536px' },
        'desktop-only': { min: '1280px', max: '1535px' },
        'desktop-down': { max: '1279px' },

        'laptop-up': { min: '1280px' },
        'laptop-only': { min: '1024px', max: '1279px' },
        'laptop-down': { max: '1023px' },

        'tablet-up': { min: '1024px' },
        'tablet-only': { min: '768px', max: '1023px' },
        'tablet-down': { max: '767px' },

        'phone-up': { min: '768px' },
        'phone-only': { min: '640px', max: '767px' },
        'phone-down': { max: '639px' },

        'extraSmall-up': { min: '640px' },
        'extraSmall-only': { min: '475px', max: '639px' },
        'extraSmall-down': { max: '474px' },
      },
    },
  },
  plugins: [],
};
