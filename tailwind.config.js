/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8FB88E',
        'secondary': '#0A8300',
        'text_color': '#FCFFFA',
        'input_background': '#D9E3D8',
      },
      backgroundImage: {
        'payment_background': "url('./src/assets/img/payment-background.png')",
        'circle_background': "url('./src/assets/img/circle-background.png')",
        'credit_card_background': "url('./src/assets/img/credit-card-background.png')"
      },
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    },
  },
  plugins: [],
}