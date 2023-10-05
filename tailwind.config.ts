import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': 'url(\'/img/pattern.png\')',
        'hero-bg': 'url(\'/img/hero-bg.png\')',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'black-100': '#2b2c35',
        'blue-100': '#f5f8ff',
        'gray-100': '#rgba(59,60,152,0.02)',
        'gray-300': 'rgba(59,60,152,0.04)',
        'gray-500': '#747a88',
        'primary': '#2b59ff',
        'secondary': '#f79761',
      }
    }
  },
  plugins: [],
}
export default config
