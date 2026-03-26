/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        frame: {
          black: '#0a0a0a',
          dark: '#1a1a1a',
          gray: '#2a2a2a',
          light: '#8a8a8a',
          gold: '#c9a227',
          cream: '#f5f0e8',
          white: '#fafafa',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
