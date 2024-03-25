/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'title': '#8E74DB',
      'sous-title': '#D174DB',
      'elements': '#8272B0',
      'sous-elements': '#D0BFFF',
      'details': '#363049',
      'sous-details': '#DDD1FF',
      'bg': '#EBE3FF',
      'icons': '#747CDB',
      'gradient-1': '#080A2C',
      'gradient-2': '#383F98'
    },
    screens: {
      'sm': '430px',
      'md': '600px',
      'lg': '905px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'higher-mobile': { 'raw': '(min-height: 675px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
};
