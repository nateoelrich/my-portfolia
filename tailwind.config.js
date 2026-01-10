/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-portfolio-purple': 'linear-gradient(to bottom right, rgb(88 28 135), rgb(107 114 128), rgb(251 146 60))',
        'gradient-portfolio-indigo': 'linear-gradient(to bottom right, rgb(49 46 129), rgb(107 114 128), rgb(251 146 60))',
      },
    },
  },
  plugins: [],
}
