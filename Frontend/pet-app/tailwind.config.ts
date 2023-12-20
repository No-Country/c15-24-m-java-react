import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BFDBFE',
        Acento: '#fda4af',
        secundario1: '#AE7565',
        secundario2: '#5B5B5B', 

      },
    },
  },
  plugins: [],
}
export default config
