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
        primary: '#F5F3E7',
        primary1: '#6B7280',
        secundario1: '#BFDBFE',
        secundario2: '#FDA4AF',
        secundario3: '#4B5563',
        secundario4:'#AE7565'
      },
    },
  },
  plugins: [],
}
export default config
