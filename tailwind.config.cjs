module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#000000',
          800: '#0a0a0a'
        },
        accent: {
          500: '#f59e0b'
        },
        yellow: {
          400: '#f59e0b',
          500: '#f59e0b'
        }
      }
    }
  },
  plugins: []
}
