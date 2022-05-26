module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#DFECF4',
        'herocolor':  '#DF00F4'
      },
      fontFamily: {
        master: ['Commissioner', 'sans-serif']
      }
    },
  },
  plugins: [],
}
