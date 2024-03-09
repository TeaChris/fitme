import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC8019',
        gray: {
          100: '#404040',
          200: '#808080',
        },
        black: '#202020',
        variant: '#FFD0D0',
        alt: '#FFEDD0',
        green: '#1AC84B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
