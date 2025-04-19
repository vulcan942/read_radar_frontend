/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stoneLight: '#EDE8E3',
        stoneBeige: '#D6C7B0',
        stoneGray: '#A89C94',
        stoneDark: '#756B63',
        accentCopper: '#B36A5E'
      },
      backgroundImage: {
        'warm-stone': 'linear-gradient(135deg, #EDE8E3, #D6C7B0)',
        'warm-dark': 'linear-gradient(135deg, #A89C94, #756B63)',
        accent: 'linear-gradient(135deg, #B36A5E, #756B63)'
      }
    }
  },
  plugins: []
}
