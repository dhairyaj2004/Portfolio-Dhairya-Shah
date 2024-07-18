/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '825px',
      'md': '768px',
      'lg': '1024px',
    },
    fontFamily: {
      
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}

