/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          yellow: '#f4c03b',
          'yellow-hover': '#e0ad29',
          dark: '#243344',
          'dark-deep': '#1c2734',
          'dark-darker': '#16202c',
          gray: '#6c7a89',
          'light-gray': '#f7f9fb',
          'card-bg': '#ffffff',
          border: 'rgba(36, 51, 68, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'theme-yellow': '-15px 15px 0px 0px #f4c03b',
        'theme-yellow-sm': '-8px 8px 0px 0px #f4c03b',
        'theme-card': '0px 10px 50px 0px rgba(36, 51, 68, 0.1)',
        'theme-card-hover': '0px 20px 60px 0px rgba(36, 51, 68, 0.18)',
      },
    },
  },
  plugins: [],
};
