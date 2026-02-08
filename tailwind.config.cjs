module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0f172a',
          800: '#0b1220'
        },
        accent: {
          500: '#10b981'
        }
      }
    }
  },
  plugins: []
}
